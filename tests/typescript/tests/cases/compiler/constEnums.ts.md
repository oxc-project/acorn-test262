__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3069,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 16,
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 17,
        "end": 33,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "value": 100,
              "raw": "100"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 35,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 51,
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 52,
        "end": 610,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 86,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 93,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 97,
              "end": 99,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 105,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 114,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 120,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 124,
              "end": 129,
              "left": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 135,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 139,
              "end": 144,
              "left": {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "value": 1,
                "raw": "1"
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 150,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 155,
              "end": 160,
              "left": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "value": 1,
                "raw": "1"
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "start": 159,
                "end": 160,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 167,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 171,
              "end": 179,
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "start": 173,
                "end": 178,
                "left": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 185,
            "end": 196,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 189,
              "end": 196,
              "left": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "start": 195,
                "end": 196,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 202,
            "end": 211,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 206,
              "end": 211,
              "left": {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "value": 1,
                "raw": "1"
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 217,
            "end": 229,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 221,
              "end": 229,
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "start": 223,
                "end": 228,
                "left": {
                  "type": "Literal",
                  "start": 223,
                  "end": 224,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "|",
                "right": {
                  "type": "Literal",
                  "start": 227,
                  "end": 228,
                  "value": 5,
                  "raw": "5"
                }
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 235,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 239,
              "end": 241,
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 247,
            "end": 257,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 251,
              "end": 257,
              "left": {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<<",
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 263,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 267,
              "end": 273,
              "left": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 272,
                "end": 273,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 279,
            "end": 289,
            "id": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 283,
              "end": 289,
              "left": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">>",
              "right": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 295,
            "end": 305,
            "id": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 299,
              "end": 305,
              "left": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "start": 304,
                "end": 305,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 311,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 311,
              "end": 313,
              "decorators": [],
              "name": "PQ",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 316,
              "end": 322,
              "left": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "start": 321,
                "end": 322,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 328,
            "end": 334,
            "id": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 332,
              "end": 334,
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 340,
            "end": 349,
            "id": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 344,
              "end": 349,
              "left": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "value": 5,
                "raw": "5"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 355,
            "end": 364,
            "id": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 359,
              "end": 364,
              "left": {
                "type": "Literal",
                "start": 359,
                "end": 360,
                "value": 5,
                "raw": "5"
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 370,
            "end": 379,
            "id": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 374,
              "end": 379,
              "left": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 385,
            "end": 394,
            "id": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 389,
              "end": 394,
              "left": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "start": 393,
                "end": 394,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 400,
            "end": 410,
            "id": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 404,
              "end": 410,
              "left": {
                "type": "Literal",
                "start": 404,
                "end": 406,
                "value": 10,
                "raw": "10"
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 416,
            "end": 427,
            "id": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 420,
              "end": 427,
              "object": {
                "type": "Identifier",
                "start": 420,
                "end": 425,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 517,
            "end": 524,
            "id": {
              "type": "Identifier",
              "start": 517,
              "end": 519,
              "decorators": [],
              "name": "W1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 522,
              "end": 524,
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 530,
            "end": 543,
            "id": {
              "type": "Identifier",
              "start": 530,
              "end": 532,
              "decorators": [],
              "name": "W2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 535,
              "end": 543,
              "object": {
                "type": "Identifier",
                "start": 535,
                "end": 540,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 541,
                "end": 543,
                "decorators": [],
                "name": "A0",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 549,
            "end": 565,
            "id": {
              "type": "Identifier",
              "start": 549,
              "end": 551,
              "decorators": [],
              "name": "W3",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 554,
              "end": 565,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 560,
                "end": 564,
                "value": "A0",
                "raw": "\"A0\""
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 571,
            "end": 586,
            "id": {
              "type": "Identifier",
              "start": 571,
              "end": 573,
              "decorators": [],
              "name": "W4",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 576,
              "end": 586,
              "object": {
                "type": "Identifier",
                "start": 576,
                "end": 581,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 582,
                "end": 585,
                "value": "W",
                "raw": "\"W\""
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 592,
            "end": 607,
            "id": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "decorators": [],
              "name": "W5",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 597,
              "end": 607,
              "object": {
                "type": "Identifier",
                "start": 597,
                "end": 602,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "TemplateLiteral",
                "start": 603,
                "end": 606,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 603,
                    "end": 606,
                    "value": {
                      "raw": "V",
                      "cooked": "V"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 612,
      "end": 708,
      "id": {
        "type": "Identifier",
        "start": 623,
        "end": 631,
        "decorators": [],
        "name": "Comments",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 632,
        "end": 708,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 638,
            "end": 642,
            "id": {
              "type": "Literal",
              "start": 638,
              "end": 642,
              "value": "//",
              "raw": "\"//\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 648,
            "end": 652,
            "id": {
              "type": "Literal",
              "start": 648,
              "end": 652,
              "value": "/*",
              "raw": "\"/*\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 658,
            "end": 662,
            "id": {
              "type": "Literal",
              "start": 658,
              "end": 662,
              "value": "*/",
              "raw": "\"*/\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 668,
            "end": 673,
            "id": {
              "type": "Literal",
              "start": 668,
              "end": 673,
              "value": "///",
              "raw": "\"///\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 679,
            "end": 682,
            "id": {
              "type": "Literal",
              "start": 679,
              "end": 682,
              "value": "#",
              "raw": "\"#\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 688,
            "end": 694,
            "id": {
              "type": "Literal",
              "start": 688,
              "end": 694,
              "value": "<!--",
              "raw": "\"<!--\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 700,
            "end": 705,
            "id": {
              "type": "Literal",
              "start": 700,
              "end": 705,
              "value": "-->",
              "raw": "\"-->\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 710,
      "end": 896,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 718,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 719,
        "end": 896,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 725,
            "end": 894,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 732,
              "end": 894,
              "id": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 741,
                "end": 894,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 751,
                    "end": 888,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 758,
                      "end": 888,
                      "id": {
                        "type": "Identifier",
                        "start": 765,
                        "end": 766,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 767,
                        "end": 888,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 781,
                            "end": 878,
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "start": 788,
                              "end": 878,
                              "id": {
                                "type": "Identifier",
                                "start": 799,
                                "end": 800,
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "start": 801,
                                "end": 878,
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "start": 819,
                                    "end": 825,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 819,
                                      "end": 821,
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "start": 824,
                                      "end": 825,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "computed": false
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "start": 843,
                                    "end": 864,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 843,
                                      "end": 845,
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "start": 848,
                                      "end": 864,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 848,
                                        "end": 858,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 848,
                                          "end": 855,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 848,
                                            "end": 853,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 848,
                                              "end": 851,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 848,
                                                "end": 849,
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 850,
                                                "end": 851,
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 852,
                                              "end": 853,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 854,
                                            "end": 855,
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 856,
                                          "end": 858,
                                          "decorators": [],
                                          "name": "V1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Literal",
                                        "start": 861,
                                        "end": 864,
                                        "value": 100,
                                        "raw": "100"
                                      }
                                    },
                                    "computed": false
                                  }
                                ]
                              },
                              "const": true,
                              "declare": false
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
    {
      "type": "TSModuleDeclaration",
      "start": 898,
      "end": 1105,
      "id": {
        "type": "Identifier",
        "start": 905,
        "end": 906,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 907,
        "end": 1105,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 913,
            "end": 1103,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 920,
              "end": 1103,
              "id": {
                "type": "Identifier",
                "start": 927,
                "end": 928,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 929,
                "end": 1103,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 939,
                    "end": 1097,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 946,
                      "end": 1097,
                      "id": {
                        "type": "Identifier",
                        "start": 953,
                        "end": 954,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 955,
                        "end": 1097,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 969,
                            "end": 1087,
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "start": 976,
                              "end": 1087,
                              "id": {
                                "type": "Identifier",
                                "start": 987,
                                "end": 988,
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "start": 989,
                                "end": 1087,
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1007,
                                    "end": 1031,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1007,
                                      "end": 1009,
                                      "decorators": [],
                                      "name": "V3",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "start": 1012,
                                      "end": 1031,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 1012,
                                        "end": 1025,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 1012,
                                          "end": 1019,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 1012,
                                            "end": 1017,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 1012,
                                              "end": 1015,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1012,
                                                "end": 1013,
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1014,
                                                "end": 1015,
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 1016,
                                              "end": 1017,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1018,
                                            "end": 1019,
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "start": 1020,
                                          "end": 1024,
                                          "value": "V2",
                                          "raw": "\"V2\""
                                        },
                                        "optional": false,
                                        "computed": true
                                      },
                                      "operator": "&",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1028,
                                        "end": 1031,
                                        "value": 200,
                                        "raw": "200"
                                      }
                                    },
                                    "computed": false
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1049,
                                    "end": 1072,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1049,
                                      "end": 1051,
                                      "decorators": [],
                                      "name": "V4",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "start": 1054,
                                      "end": 1072,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 1054,
                                        "end": 1067,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 1054,
                                          "end": 1061,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 1054,
                                            "end": 1059,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 1054,
                                              "end": 1057,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1054,
                                                "end": 1055,
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1056,
                                                "end": 1057,
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 1058,
                                              "end": 1059,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1060,
                                            "end": 1061,
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "TemplateLiteral",
                                          "start": 1062,
                                          "end": 1066,
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "start": 1062,
                                              "end": 1066,
                                              "value": {
                                                "raw": "V1",
                                                "cooked": "V1"
                                              },
                                              "tail": true
                                            }
                                          ],
                                          "expressions": []
                                        },
                                        "optional": false,
                                        "computed": true
                                      },
                                      "operator": "<<",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1071,
                                        "end": 1072,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "computed": false
                                  }
                                ]
                              },
                              "const": true,
                              "declare": false
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
    {
      "type": "TSModuleDeclaration",
      "start": 1107,
      "end": 1283,
      "id": {
        "type": "Identifier",
        "start": 1114,
        "end": 1116,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1117,
        "end": 1283,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1123,
            "end": 1281,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1130,
              "end": 1281,
              "id": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1139,
                "end": 1281,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1149,
                    "end": 1275,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 1156,
                      "end": 1275,
                      "id": {
                        "type": "Identifier",
                        "start": 1163,
                        "end": 1164,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 1165,
                        "end": 1275,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 1179,
                            "end": 1265,
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "start": 1186,
                              "end": 1265,
                              "id": {
                                "type": "Identifier",
                                "start": 1197,
                                "end": 1198,
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "start": 1199,
                                "end": 1265,
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1217,
                                    "end": 1224,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1217,
                                      "end": 1219,
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "start": 1222,
                                      "end": 1224,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "computed": false
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1242,
                                    "end": 1250,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1242,
                                      "end": 1244,
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "start": 1247,
                                      "end": 1250,
                                      "value": 110,
                                      "raw": "110"
                                    },
                                    "computed": false
                                  }
                                ]
                              },
                              "const": true,
                              "declare": false
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
    {
      "type": "TSModuleDeclaration",
      "start": 1285,
      "end": 1567,
      "id": {
        "type": "Identifier",
        "start": 1292,
        "end": 1294,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1295,
        "end": 1567,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1301,
            "end": 1565,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1308,
              "end": 1565,
              "id": {
                "type": "Identifier",
                "start": 1315,
                "end": 1316,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1317,
                "end": 1565,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1327,
                    "end": 1453,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 1334,
                      "end": 1453,
                      "id": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1342,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 1343,
                        "end": 1453,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 1357,
                            "end": 1443,
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "start": 1364,
                              "end": 1443,
                              "id": {
                                "type": "Identifier",
                                "start": 1375,
                                "end": 1376,
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "start": 1377,
                                "end": 1443,
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1395,
                                    "end": 1402,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1395,
                                      "end": 1397,
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "start": 1400,
                                      "end": 1402,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "computed": false
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "start": 1420,
                                    "end": 1428,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1420,
                                      "end": 1422,
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "start": 1425,
                                      "end": 1428,
                                      "value": 110,
                                      "raw": "110"
                                    },
                                    "computed": false
                                  }
                                ]
                              },
                              "const": true,
                              "declare": false
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
                    "type": "ExportNamedDeclaration",
                    "start": 1510,
                    "end": 1559,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 1517,
                      "end": 1559,
                      "id": {
                        "type": "Identifier",
                        "start": 1524,
                        "end": 1525,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 1526,
                        "end": 1559,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1540,
                            "end": 1549,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1544,
                                "end": 1549,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1544,
                                  "end": 1545,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 1548,
                                  "end": 1549,
                                  "value": 1,
                                  "raw": "1"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 1569,
      "end": 1588,
      "id": {
        "type": "Identifier",
        "start": 1576,
        "end": 1577,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1580,
        "end": 1587,
        "left": {
          "type": "TSQualifiedName",
          "start": 1580,
          "end": 1585,
          "left": {
            "type": "TSQualifiedName",
            "start": 1580,
            "end": 1583,
            "left": {
              "type": "Identifier",
              "start": 1580,
              "end": 1581,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1582,
              "end": 1583,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 1584,
            "end": 1585,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1586,
          "end": 1587,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 1589,
      "end": 1606,
      "id": {
        "type": "Identifier",
        "start": 1596,
        "end": 1598,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1601,
        "end": 1605,
        "left": {
          "type": "Identifier",
          "start": 1601,
          "end": 1603,
          "decorators": [],
          "name": "A1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1604,
          "end": 1605,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 1607,
      "end": 1624,
      "id": {
        "type": "Identifier",
        "start": 1614,
        "end": 1616,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1619,
        "end": 1623,
        "left": {
          "type": "Identifier",
          "start": 1619,
          "end": 1621,
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1622,
          "end": 1623,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1626,
      "end": 1716,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1639,
        "decorators": [],
        "name": "foo0",
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
          "start": 1640,
          "end": 1644,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1641,
            "end": 1644,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1643,
              "end": 1644,
              "typeName": {
                "type": "Identifier",
                "start": 1643,
                "end": 1644,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1645,
        "end": 1651,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1647,
          "end": 1651
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1652,
        "end": 1716,
        "body": [
          {
            "type": "IfStatement",
            "start": 1658,
            "end": 1714,
            "test": {
              "type": "BinaryExpression",
              "start": 1662,
              "end": 1672,
              "left": {
                "type": "Identifier",
                "start": 1662,
                "end": 1663,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1668,
                "end": 1672,
                "object": {
                  "type": "Identifier",
                  "start": 1668,
                  "end": 1669,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1670,
                  "end": 1672,
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1674,
              "end": 1681,
              "body": []
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1691,
              "end": 1714,
              "test": {
                "type": "BinaryExpression",
                "start": 1695,
                "end": 1705,
                "left": {
                  "type": "Identifier",
                  "start": 1695,
                  "end": 1696,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "start": 1701,
                  "end": 1705,
                  "object": {
                    "type": "Identifier",
                    "start": 1701,
                    "end": 1702,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1703,
                    "end": 1705,
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1707,
                "end": 1714,
                "body": []
              },
              "alternate": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1718,
      "end": 1823,
      "id": {
        "type": "Identifier",
        "start": 1727,
        "end": 1731,
        "decorators": [],
        "name": "foo1",
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
          "start": 1732,
          "end": 1741,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1733,
            "end": 1741,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1735,
              "end": 1741,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1735,
                "end": 1741,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 1735,
                  "end": 1739,
                  "left": {
                    "type": "Identifier",
                    "start": 1735,
                    "end": 1737,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1738,
                    "end": 1739,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 1740,
                  "end": 1741,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1742,
        "end": 1748,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1744,
          "end": 1748
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1749,
        "end": 1823,
        "body": [
          {
            "type": "IfStatement",
            "start": 1755,
            "end": 1821,
            "test": {
              "type": "BinaryExpression",
              "start": 1759,
              "end": 1774,
              "left": {
                "type": "Identifier",
                "start": 1759,
                "end": 1760,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1765,
                "end": 1774,
                "object": {
                  "type": "MemberExpression",
                  "start": 1765,
                  "end": 1771,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1765,
                    "end": 1769,
                    "object": {
                      "type": "Identifier",
                      "start": 1765,
                      "end": 1767,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1768,
                      "end": 1769,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1770,
                    "end": 1771,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1772,
                  "end": 1774,
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1776,
              "end": 1783,
              "body": []
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1793,
              "end": 1821,
              "test": {
                "type": "BinaryExpression",
                "start": 1797,
                "end": 1812,
                "left": {
                  "type": "Identifier",
                  "start": 1797,
                  "end": 1798,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "start": 1803,
                  "end": 1812,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1803,
                    "end": 1809,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1803,
                      "end": 1807,
                      "object": {
                        "type": "Identifier",
                        "start": 1803,
                        "end": 1805,
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1806,
                        "end": 1807,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1809,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1812,
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1814,
                "end": 1821,
                "body": []
              },
              "alternate": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1825,
      "end": 1930,
      "id": {
        "type": "Identifier",
        "start": 1834,
        "end": 1838,
        "decorators": [],
        "name": "foo2",
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
          "start": 1839,
          "end": 1848,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1840,
            "end": 1848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1842,
              "end": 1848,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1842,
                "end": 1848,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 1842,
                  "end": 1846,
                  "left": {
                    "type": "Identifier",
                    "start": 1842,
                    "end": 1844,
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1846,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 1847,
                  "end": 1848,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1849,
        "end": 1855,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1851,
          "end": 1855
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1856,
        "end": 1930,
        "body": [
          {
            "type": "IfStatement",
            "start": 1862,
            "end": 1928,
            "test": {
              "type": "BinaryExpression",
              "start": 1866,
              "end": 1881,
              "left": {
                "type": "Identifier",
                "start": 1866,
                "end": 1867,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1872,
                "end": 1881,
                "object": {
                  "type": "MemberExpression",
                  "start": 1872,
                  "end": 1878,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1872,
                    "end": 1876,
                    "object": {
                      "type": "Identifier",
                      "start": 1872,
                      "end": 1874,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1875,
                      "end": 1876,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1877,
                    "end": 1878,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1879,
                  "end": 1881,
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1883,
              "end": 1890,
              "body": []
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1900,
              "end": 1928,
              "test": {
                "type": "BinaryExpression",
                "start": 1904,
                "end": 1919,
                "left": {
                  "type": "Identifier",
                  "start": 1904,
                  "end": 1905,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "start": 1910,
                  "end": 1919,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1910,
                    "end": 1916,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1910,
                      "end": 1914,
                      "object": {
                        "type": "Identifier",
                        "start": 1910,
                        "end": 1912,
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1913,
                        "end": 1914,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1915,
                      "end": 1916,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1917,
                    "end": 1919,
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1921,
                "end": 1928,
                "body": []
              },
              "alternate": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1933,
      "end": 2628,
      "id": {
        "type": "Identifier",
        "start": 1942,
        "end": 1945,
        "decorators": [],
        "name": "foo",
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
          "start": 1946,
          "end": 1954,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1947,
            "end": 1954,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1949,
              "end": 1954,
              "typeName": {
                "type": "Identifier",
                "start": 1949,
                "end": 1954,
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1956,
        "end": 2628,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1962,
            "end": 2626,
            "discriminant": {
              "type": "Identifier",
              "start": 1970,
              "end": 1971,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1983,
                "end": 1996,
                "test": {
                  "type": "MemberExpression",
                  "start": 1988,
                  "end": 1995,
                  "object": {
                    "type": "Identifier",
                    "start": 1988,
                    "end": 1993,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1994,
                    "end": 1995,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2005,
                "end": 2018,
                "test": {
                  "type": "MemberExpression",
                  "start": 2010,
                  "end": 2017,
                  "object": {
                    "type": "Identifier",
                    "start": 2010,
                    "end": 2015,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2016,
                    "end": 2017,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2027,
                "end": 2040,
                "test": {
                  "type": "MemberExpression",
                  "start": 2032,
                  "end": 2039,
                  "object": {
                    "type": "Identifier",
                    "start": 2032,
                    "end": 2037,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2039,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2049,
                "end": 2062,
                "test": {
                  "type": "MemberExpression",
                  "start": 2054,
                  "end": 2061,
                  "object": {
                    "type": "Identifier",
                    "start": 2054,
                    "end": 2059,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2060,
                    "end": 2061,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2071,
                "end": 2084,
                "test": {
                  "type": "MemberExpression",
                  "start": 2076,
                  "end": 2083,
                  "object": {
                    "type": "Identifier",
                    "start": 2076,
                    "end": 2081,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2082,
                    "end": 2083,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2093,
                "end": 2106,
                "test": {
                  "type": "MemberExpression",
                  "start": 2098,
                  "end": 2105,
                  "object": {
                    "type": "Identifier",
                    "start": 2098,
                    "end": 2103,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2104,
                    "end": 2105,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2115,
                "end": 2128,
                "test": {
                  "type": "MemberExpression",
                  "start": 2120,
                  "end": 2127,
                  "object": {
                    "type": "Identifier",
                    "start": 2120,
                    "end": 2125,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2126,
                    "end": 2127,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2137,
                "end": 2150,
                "test": {
                  "type": "MemberExpression",
                  "start": 2142,
                  "end": 2149,
                  "object": {
                    "type": "Identifier",
                    "start": 2142,
                    "end": 2147,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2148,
                    "end": 2149,
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2159,
                "end": 2172,
                "test": {
                  "type": "MemberExpression",
                  "start": 2164,
                  "end": 2171,
                  "object": {
                    "type": "Identifier",
                    "start": 2164,
                    "end": 2169,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2170,
                    "end": 2171,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2181,
                "end": 2194,
                "test": {
                  "type": "MemberExpression",
                  "start": 2186,
                  "end": 2193,
                  "object": {
                    "type": "Identifier",
                    "start": 2186,
                    "end": 2191,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2192,
                    "end": 2193,
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2203,
                "end": 2216,
                "test": {
                  "type": "MemberExpression",
                  "start": 2208,
                  "end": 2215,
                  "object": {
                    "type": "Identifier",
                    "start": 2208,
                    "end": 2213,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2214,
                    "end": 2215,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2225,
                "end": 2238,
                "test": {
                  "type": "MemberExpression",
                  "start": 2230,
                  "end": 2237,
                  "object": {
                    "type": "Identifier",
                    "start": 2230,
                    "end": 2235,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2236,
                    "end": 2237,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2247,
                "end": 2260,
                "test": {
                  "type": "MemberExpression",
                  "start": 2252,
                  "end": 2259,
                  "object": {
                    "type": "Identifier",
                    "start": 2252,
                    "end": 2257,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2258,
                    "end": 2259,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2269,
                "end": 2282,
                "test": {
                  "type": "MemberExpression",
                  "start": 2274,
                  "end": 2281,
                  "object": {
                    "type": "Identifier",
                    "start": 2274,
                    "end": 2279,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2280,
                    "end": 2281,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2291,
                "end": 2304,
                "test": {
                  "type": "MemberExpression",
                  "start": 2296,
                  "end": 2303,
                  "object": {
                    "type": "Identifier",
                    "start": 2296,
                    "end": 2301,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2302,
                    "end": 2303,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2313,
                "end": 2326,
                "test": {
                  "type": "MemberExpression",
                  "start": 2318,
                  "end": 2325,
                  "object": {
                    "type": "Identifier",
                    "start": 2318,
                    "end": 2323,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2324,
                    "end": 2325,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2335,
                "end": 2349,
                "test": {
                  "type": "MemberExpression",
                  "start": 2340,
                  "end": 2348,
                  "object": {
                    "type": "Identifier",
                    "start": 2340,
                    "end": 2345,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2346,
                    "end": 2348,
                    "decorators": [],
                    "name": "PQ",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2358,
                "end": 2371,
                "test": {
                  "type": "MemberExpression",
                  "start": 2363,
                  "end": 2370,
                  "object": {
                    "type": "Identifier",
                    "start": 2363,
                    "end": 2368,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2370,
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2380,
                "end": 2393,
                "test": {
                  "type": "MemberExpression",
                  "start": 2385,
                  "end": 2392,
                  "object": {
                    "type": "Identifier",
                    "start": 2385,
                    "end": 2390,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2391,
                    "end": 2392,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2402,
                "end": 2415,
                "test": {
                  "type": "MemberExpression",
                  "start": 2407,
                  "end": 2414,
                  "object": {
                    "type": "Identifier",
                    "start": 2407,
                    "end": 2412,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2413,
                    "end": 2414,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2424,
                "end": 2440,
                "test": {
                  "type": "MemberExpression",
                  "start": 2429,
                  "end": 2439,
                  "object": {
                    "type": "Identifier",
                    "start": 2429,
                    "end": 2434,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2435,
                    "end": 2438,
                    "value": "T",
                    "raw": "\"T\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2449,
                "end": 2465,
                "test": {
                  "type": "MemberExpression",
                  "start": 2454,
                  "end": 2464,
                  "object": {
                    "type": "Identifier",
                    "start": 2454,
                    "end": 2459,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "start": 2460,
                    "end": 2463,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2460,
                        "end": 2463,
                        "value": {
                          "raw": "U",
                          "cooked": "U"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2474,
                "end": 2487,
                "test": {
                  "type": "MemberExpression",
                  "start": 2479,
                  "end": 2486,
                  "object": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2484,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2485,
                    "end": 2486,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2496,
                "end": 2509,
                "test": {
                  "type": "MemberExpression",
                  "start": 2501,
                  "end": 2508,
                  "object": {
                    "type": "Identifier",
                    "start": 2501,
                    "end": 2506,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2507,
                    "end": 2508,
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2518,
                "end": 2532,
                "test": {
                  "type": "MemberExpression",
                  "start": 2523,
                  "end": 2531,
                  "object": {
                    "type": "Identifier",
                    "start": 2523,
                    "end": 2528,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2529,
                    "end": 2531,
                    "decorators": [],
                    "name": "W1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2541,
                "end": 2555,
                "test": {
                  "type": "MemberExpression",
                  "start": 2546,
                  "end": 2554,
                  "object": {
                    "type": "Identifier",
                    "start": 2546,
                    "end": 2551,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2552,
                    "end": 2554,
                    "decorators": [],
                    "name": "W2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2564,
                "end": 2578,
                "test": {
                  "type": "MemberExpression",
                  "start": 2569,
                  "end": 2577,
                  "object": {
                    "type": "Identifier",
                    "start": 2569,
                    "end": 2574,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2575,
                    "end": 2577,
                    "decorators": [],
                    "name": "W3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2587,
                "end": 2620,
                "test": {
                  "type": "MemberExpression",
                  "start": 2592,
                  "end": 2600,
                  "object": {
                    "type": "Identifier",
                    "start": 2592,
                    "end": 2597,
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2598,
                    "end": 2600,
                    "decorators": [],
                    "name": "W4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 2614,
                    "end": 2620,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2630,
      "end": 2794,
      "id": {
        "type": "Identifier",
        "start": 2639,
        "end": 2642,
        "decorators": [],
        "name": "bar",
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
          "start": 2643,
          "end": 2653,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2644,
            "end": 2653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2646,
              "end": 2653,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 2646,
                "end": 2653,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 2646,
                  "end": 2651,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 2646,
                    "end": 2649,
                    "left": {
                      "type": "Identifier",
                      "start": 2646,
                      "end": 2647,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2648,
                      "end": 2649,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2650,
                    "end": 2651,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 2652,
                  "end": 2653,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2654,
        "end": 2662,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2656,
          "end": 2662
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2663,
        "end": 2794,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2669,
            "end": 2792,
            "discriminant": {
              "type": "Identifier",
              "start": 2677,
              "end": 2678,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2690,
                "end": 2716,
                "test": {
                  "type": "MemberExpression",
                  "start": 2695,
                  "end": 2705,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2695,
                    "end": 2702,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2695,
                      "end": 2700,
                      "object": {
                        "type": "MemberExpression",
                        "start": 2695,
                        "end": 2698,
                        "object": {
                          "type": "Identifier",
                          "start": 2695,
                          "end": 2696,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2697,
                          "end": 2698,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2699,
                        "end": 2700,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2701,
                      "end": 2702,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2703,
                    "end": 2705,
                    "decorators": [],
                    "name": "V1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2707,
                    "end": 2716,
                    "argument": {
                      "type": "Literal",
                      "start": 2714,
                      "end": 2715,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2725,
                "end": 2751,
                "test": {
                  "type": "MemberExpression",
                  "start": 2730,
                  "end": 2740,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2730,
                    "end": 2737,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2730,
                      "end": 2735,
                      "object": {
                        "type": "MemberExpression",
                        "start": 2730,
                        "end": 2733,
                        "object": {
                          "type": "Identifier",
                          "start": 2730,
                          "end": 2731,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2732,
                          "end": 2733,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2734,
                        "end": 2735,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2736,
                      "end": 2737,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2738,
                    "end": 2740,
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2742,
                    "end": 2751,
                    "argument": {
                      "type": "Literal",
                      "start": 2749,
                      "end": 2750,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2760,
                "end": 2786,
                "test": {
                  "type": "MemberExpression",
                  "start": 2765,
                  "end": 2775,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2765,
                    "end": 2772,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2765,
                      "end": 2770,
                      "object": {
                        "type": "MemberExpression",
                        "start": 2765,
                        "end": 2768,
                        "object": {
                          "type": "Identifier",
                          "start": 2765,
                          "end": 2766,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2767,
                          "end": 2768,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2769,
                        "end": 2770,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2771,
                      "end": 2772,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2773,
                    "end": 2775,
                    "decorators": [],
                    "name": "V3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2777,
                    "end": 2786,
                    "argument": {
                      "type": "Literal",
                      "start": 2784,
                      "end": 2785,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2796,
      "end": 3069,
      "id": {
        "type": "Identifier",
        "start": 2805,
        "end": 2808,
        "decorators": [],
        "name": "baz",
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
          "start": 2809,
          "end": 2820,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2810,
            "end": 2820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2812,
              "end": 2820,
              "typeName": {
                "type": "Identifier",
                "start": 2812,
                "end": 2820,
                "decorators": [],
                "name": "Comments",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2822,
        "end": 3069,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2828,
            "end": 3067,
            "discriminant": {
              "type": "Identifier",
              "start": 2836,
              "end": 2837,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2849,
                "end": 2869,
                "test": {
                  "type": "MemberExpression",
                  "start": 2854,
                  "end": 2868,
                  "object": {
                    "type": "Identifier",
                    "start": 2854,
                    "end": 2862,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2863,
                    "end": 2867,
                    "value": "//",
                    "raw": "\"//\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2878,
                "end": 2898,
                "test": {
                  "type": "MemberExpression",
                  "start": 2883,
                  "end": 2897,
                  "object": {
                    "type": "Identifier",
                    "start": 2883,
                    "end": 2891,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2892,
                    "end": 2896,
                    "value": "/*",
                    "raw": "\"/*\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2907,
                "end": 2927,
                "test": {
                  "type": "MemberExpression",
                  "start": 2912,
                  "end": 2926,
                  "object": {
                    "type": "Identifier",
                    "start": 2912,
                    "end": 2920,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2921,
                    "end": 2925,
                    "value": "*/",
                    "raw": "\"*/\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2936,
                "end": 2957,
                "test": {
                  "type": "MemberExpression",
                  "start": 2941,
                  "end": 2956,
                  "object": {
                    "type": "Identifier",
                    "start": 2941,
                    "end": 2949,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2950,
                    "end": 2955,
                    "value": "///",
                    "raw": "\"///\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2966,
                "end": 2985,
                "test": {
                  "type": "MemberExpression",
                  "start": 2971,
                  "end": 2984,
                  "object": {
                    "type": "Identifier",
                    "start": 2971,
                    "end": 2979,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2980,
                    "end": 2983,
                    "value": "#",
                    "raw": "\"#\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2994,
                "end": 3016,
                "test": {
                  "type": "MemberExpression",
                  "start": 2999,
                  "end": 3015,
                  "object": {
                    "type": "Identifier",
                    "start": 2999,
                    "end": 3007,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3008,
                    "end": 3014,
                    "value": "<!--",
                    "raw": "\"<!--\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 3025,
                "end": 3061,
                "test": {
                  "type": "MemberExpression",
                  "start": 3030,
                  "end": 3045,
                  "object": {
                    "type": "Identifier",
                    "start": 3030,
                    "end": 3038,
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3039,
                    "end": 3044,
                    "value": "-->",
                    "raw": "\"-->\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 3055,
                    "end": 3061,
                    "label": null
                  }
                ]
              }
            ]
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
