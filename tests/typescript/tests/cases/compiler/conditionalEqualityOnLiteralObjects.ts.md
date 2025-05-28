__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 576,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 18,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 16,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 32,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 29,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 34,
      "end": 64,
      "test": {
        "type": "BinaryExpression",
        "start": 38,
        "end": 59,
        "left": {
          "type": "ObjectExpression",
          "start": 38,
          "end": 46,
          "properties": [
            {
              "type": "Property",
              "start": 40,
              "end": 44,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "===",
        "right": {
          "type": "ObjectExpression",
          "start": 51,
          "end": 59,
          "properties": [
            {
              "type": "Property",
              "start": 53,
              "end": 57,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 56,
                "end": 57,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 61,
        "end": 64,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 65,
      "end": 85,
      "test": {
        "type": "BinaryExpression",
        "start": 69,
        "end": 80,
        "left": {
          "type": "ArrayExpression",
          "start": 69,
          "end": 72,
          "elements": [
            {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "===",
        "right": {
          "type": "ArrayExpression",
          "start": 77,
          "end": 80,
          "elements": [
            {
              "type": "Literal",
              "start": 78,
              "end": 79,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 86,
      "end": 109,
      "test": {
        "type": "BinaryExpression",
        "start": 90,
        "end": 104,
        "left": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "ObjectExpression",
          "start": 96,
          "end": 104,
          "properties": [
            {
              "type": "Property",
              "start": 98,
              "end": 102,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 101,
                "end": 102,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 106,
        "end": 109,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 110,
      "end": 128,
      "test": {
        "type": "BinaryExpression",
        "start": 114,
        "end": 123,
        "left": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "ArrayExpression",
          "start": 120,
          "end": 123,
          "elements": [
            {
              "type": "Literal",
              "start": 121,
              "end": 122,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 125,
        "end": 128,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 129,
      "end": 152,
      "test": {
        "type": "BinaryExpression",
        "start": 133,
        "end": 147,
        "left": {
          "type": "ObjectExpression",
          "start": 133,
          "end": 141,
          "properties": [
            {
              "type": "Property",
              "start": 135,
              "end": 139,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 138,
                "end": 139,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 149,
        "end": 152,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 153,
      "end": 171,
      "test": {
        "type": "BinaryExpression",
        "start": 157,
        "end": 166,
        "left": {
          "type": "ArrayExpression",
          "start": 157,
          "end": 160,
          "elements": [
            {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 173,
      "end": 203,
      "test": {
        "type": "BinaryExpression",
        "start": 177,
        "end": 198,
        "left": {
          "type": "ObjectExpression",
          "start": 177,
          "end": 185,
          "properties": [
            {
              "type": "Property",
              "start": 179,
              "end": 183,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "!==",
        "right": {
          "type": "ObjectExpression",
          "start": 190,
          "end": 198,
          "properties": [
            {
              "type": "Property",
              "start": 192,
              "end": 196,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 195,
                "end": 196,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 200,
        "end": 203,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 204,
      "end": 224,
      "test": {
        "type": "BinaryExpression",
        "start": 208,
        "end": 219,
        "left": {
          "type": "ArrayExpression",
          "start": 208,
          "end": 211,
          "elements": [
            {
              "type": "Literal",
              "start": 209,
              "end": 210,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "!==",
        "right": {
          "type": "ArrayExpression",
          "start": 216,
          "end": 219,
          "elements": [
            {
              "type": "Literal",
              "start": 217,
              "end": 218,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 221,
        "end": 224,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 225,
      "end": 248,
      "test": {
        "type": "BinaryExpression",
        "start": 229,
        "end": 243,
        "left": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "ObjectExpression",
          "start": 235,
          "end": 243,
          "properties": [
            {
              "type": "Property",
              "start": 237,
              "end": 241,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 240,
                "end": 241,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 245,
        "end": 248,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 249,
      "end": 267,
      "test": {
        "type": "BinaryExpression",
        "start": 253,
        "end": 262,
        "left": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "ArrayExpression",
          "start": 259,
          "end": 262,
          "elements": [
            {
              "type": "Literal",
              "start": 260,
              "end": 261,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 264,
        "end": 267,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 268,
      "end": 291,
      "test": {
        "type": "BinaryExpression",
        "start": 272,
        "end": 286,
        "left": {
          "type": "ObjectExpression",
          "start": 272,
          "end": 280,
          "properties": [
            {
              "type": "Property",
              "start": 274,
              "end": 278,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 277,
                "end": 278,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 288,
        "end": 291,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 292,
      "end": 310,
      "test": {
        "type": "BinaryExpression",
        "start": 296,
        "end": 305,
        "left": {
          "type": "ArrayExpression",
          "start": 296,
          "end": 299,
          "elements": [
            {
              "type": "Literal",
              "start": 297,
              "end": 298,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 307,
        "end": 310,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 312,
      "end": 341,
      "test": {
        "type": "BinaryExpression",
        "start": 316,
        "end": 336,
        "left": {
          "type": "ObjectExpression",
          "start": 316,
          "end": 324,
          "properties": [
            {
              "type": "Property",
              "start": 318,
              "end": 322,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 321,
                "end": 322,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "start": 328,
          "end": 336,
          "properties": [
            {
              "type": "Property",
              "start": 330,
              "end": 334,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 333,
                "end": 334,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 338,
        "end": 341,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 342,
      "end": 361,
      "test": {
        "type": "BinaryExpression",
        "start": 346,
        "end": 356,
        "left": {
          "type": "ArrayExpression",
          "start": 346,
          "end": 349,
          "elements": [
            {
              "type": "Literal",
              "start": 347,
              "end": 348,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "==",
        "right": {
          "type": "ArrayExpression",
          "start": 353,
          "end": 356,
          "elements": [
            {
              "type": "Literal",
              "start": 354,
              "end": 355,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 358,
        "end": 361,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 362,
      "end": 384,
      "test": {
        "type": "BinaryExpression",
        "start": 366,
        "end": 379,
        "left": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "start": 371,
          "end": 379,
          "properties": [
            {
              "type": "Property",
              "start": 373,
              "end": 377,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 376,
                "end": 377,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 381,
        "end": 384,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 385,
      "end": 402,
      "test": {
        "type": "BinaryExpression",
        "start": 389,
        "end": 397,
        "left": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "ArrayExpression",
          "start": 394,
          "end": 397,
          "elements": [
            {
              "type": "Literal",
              "start": 395,
              "end": 396,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 399,
        "end": 402,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 403,
      "end": 425,
      "test": {
        "type": "BinaryExpression",
        "start": 407,
        "end": 420,
        "left": {
          "type": "ObjectExpression",
          "start": 407,
          "end": 415,
          "properties": [
            {
              "type": "Property",
              "start": 409,
              "end": 413,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 412,
                "end": 413,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 419,
          "end": 420,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 422,
        "end": 425,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 426,
      "end": 443,
      "test": {
        "type": "BinaryExpression",
        "start": 430,
        "end": 438,
        "left": {
          "type": "ArrayExpression",
          "start": 430,
          "end": 433,
          "elements": [
            {
              "type": "Literal",
              "start": 431,
              "end": 432,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 437,
          "end": 438,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 440,
        "end": 443,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 445,
      "end": 474,
      "test": {
        "type": "BinaryExpression",
        "start": 449,
        "end": 469,
        "left": {
          "type": "ObjectExpression",
          "start": 449,
          "end": 457,
          "properties": [
            {
              "type": "Property",
              "start": 451,
              "end": 455,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 454,
                "end": 455,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "!=",
        "right": {
          "type": "ObjectExpression",
          "start": 461,
          "end": 469,
          "properties": [
            {
              "type": "Property",
              "start": 463,
              "end": 467,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 466,
                "end": 467,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 471,
        "end": 474,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 475,
      "end": 494,
      "test": {
        "type": "BinaryExpression",
        "start": 479,
        "end": 489,
        "left": {
          "type": "ArrayExpression",
          "start": 479,
          "end": 482,
          "elements": [
            {
              "type": "Literal",
              "start": 480,
              "end": 481,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "!=",
        "right": {
          "type": "ArrayExpression",
          "start": 486,
          "end": 489,
          "elements": [
            {
              "type": "Literal",
              "start": 487,
              "end": 488,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 491,
        "end": 494,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 495,
      "end": 517,
      "test": {
        "type": "BinaryExpression",
        "start": 499,
        "end": 512,
        "left": {
          "type": "Identifier",
          "start": 499,
          "end": 500,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "ObjectExpression",
          "start": 504,
          "end": 512,
          "properties": [
            {
              "type": "Property",
              "start": 506,
              "end": 510,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 509,
                "end": 510,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 514,
        "end": 517,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 518,
      "end": 535,
      "test": {
        "type": "BinaryExpression",
        "start": 522,
        "end": 530,
        "left": {
          "type": "Identifier",
          "start": 522,
          "end": 523,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "ArrayExpression",
          "start": 527,
          "end": 530,
          "elements": [
            {
              "type": "Literal",
              "start": 528,
              "end": 529,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 532,
        "end": 535,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 536,
      "end": 558,
      "test": {
        "type": "BinaryExpression",
        "start": 540,
        "end": 553,
        "left": {
          "type": "ObjectExpression",
          "start": 540,
          "end": 548,
          "properties": [
            {
              "type": "Property",
              "start": 542,
              "end": 546,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 545,
                "end": 546,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 555,
        "end": 558,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 559,
      "end": 576,
      "test": {
        "type": "BinaryExpression",
        "start": 563,
        "end": 571,
        "left": {
          "type": "ArrayExpression",
          "start": 563,
          "end": 566,
          "elements": [
            {
              "type": "Literal",
              "start": 564,
              "end": 565,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 570,
          "end": 571,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 573,
        "end": 576,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
