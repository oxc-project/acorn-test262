__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 603,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
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
      "type": "IfStatement",
      "start": 26,
      "end": 43,
      "test": {
        "type": "BinaryExpression",
        "start": 30,
        "end": 39,
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 41,
        "end": 43,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 44,
      "end": 61,
      "test": {
        "type": "BinaryExpression",
        "start": 48,
        "end": 57,
        "left": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 59,
        "end": 61,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 63,
      "end": 79,
      "test": {
        "type": "BinaryExpression",
        "start": 67,
        "end": 75,
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 75,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 80,
      "end": 96,
      "test": {
        "type": "BinaryExpression",
        "start": 84,
        "end": 92,
        "left": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 94,
        "end": 96,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 98,
      "end": 115,
      "test": {
        "type": "BinaryExpression",
        "start": 102,
        "end": 111,
        "left": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 113,
        "end": 115,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 116,
      "end": 133,
      "test": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 129,
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 131,
        "end": 133,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 135,
      "end": 151,
      "test": {
        "type": "BinaryExpression",
        "start": 139,
        "end": 147,
        "left": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 144,
          "end": 147,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 149,
        "end": 151,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 152,
      "end": 168,
      "test": {
        "type": "BinaryExpression",
        "start": 156,
        "end": 164,
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 159,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 166,
        "end": 168,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 170,
      "end": 191,
      "test": {
        "type": "BinaryExpression",
        "start": 174,
        "end": 187,
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 185,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 189,
        "end": 191,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 192,
      "end": 213,
      "test": {
        "type": "BinaryExpression",
        "start": 196,
        "end": 209,
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 211,
        "end": 213,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 215,
      "end": 236,
      "test": {
        "type": "BinaryExpression",
        "start": 219,
        "end": 232,
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 227,
          "end": 230,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 234,
        "end": 236,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 237,
      "end": 258,
      "test": {
        "type": "BinaryExpression",
        "start": 241,
        "end": 254,
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 246,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 256,
        "end": 258,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 260,
      "end": 279,
      "test": {
        "type": "BinaryExpression",
        "start": 264,
        "end": 275,
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 267,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 275,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 277,
        "end": 279,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 280,
      "end": 299,
      "test": {
        "type": "BinaryExpression",
        "start": 284,
        "end": 295,
        "left": {
          "type": "Identifier",
          "start": 284,
          "end": 287,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 292,
          "end": 295,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 297,
        "end": 299,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 301,
      "end": 319,
      "test": {
        "type": "BinaryExpression",
        "start": 305,
        "end": 315,
        "left": {
          "type": "Identifier",
          "start": 305,
          "end": 308,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 315,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 317,
        "end": 319,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 320,
      "end": 338,
      "test": {
        "type": "BinaryExpression",
        "start": 324,
        "end": 334,
        "left": {
          "type": "Identifier",
          "start": 324,
          "end": 327,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 331,
          "end": 334,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 336,
        "end": 338,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 366,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 365,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 365,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 362,
                "end": 365
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
      "type": "IfStatement",
      "start": 367,
      "end": 390,
      "test": {
        "type": "BinaryExpression",
        "start": 371,
        "end": 386,
        "left": {
          "type": "Identifier",
          "start": 371,
          "end": 374,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 379,
          "end": 386,
          "object": {
            "type": "MemberExpression",
            "start": 379,
            "end": 383,
            "object": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 381,
              "end": 382,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 384,
            "end": 385,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 388,
        "end": 390,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 392,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 403,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 404,
          "end": 417,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 417,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 411,
              "end": 417
            }
          }
        },
        {
          "type": "Identifier",
          "start": 419,
          "end": 430,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 430,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 424,
              "end": 430
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 432,
        "end": 467,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 438,
            "end": 459,
            "argument": {
              "type": "BinaryExpression",
              "start": 445,
              "end": 458,
              "left": {
                "type": "Identifier",
                "start": 445,
                "end": 450,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 469,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 480,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 481,
          "end": 494,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 486,
            "end": 494,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 488,
              "end": 494
            }
          }
        },
        {
          "type": "Identifier",
          "start": 496,
          "end": 507,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 499,
            "end": 507,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 501,
              "end": 507
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 543,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 515,
            "end": 535,
            "argument": {
              "type": "BinaryExpression",
              "start": 522,
              "end": 534,
              "left": {
                "type": "Identifier",
                "start": 522,
                "end": 525,
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 529,
                "end": 534,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 545,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 556,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 557,
          "end": 568,
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 568,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 562,
              "end": 568
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 570,
        "end": 603,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 576,
            "end": 595,
            "argument": {
              "type": "BinaryExpression",
              "start": 583,
              "end": 594,
              "left": {
                "type": "Identifier",
                "start": 583,
                "end": 586,
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 591,
                "end": 594,
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
