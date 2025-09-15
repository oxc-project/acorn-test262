__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 16
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 24
            },
            "initializer": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 27,
              "end": 30
            },
            "computed": false,
            "start": 22,
            "end": 30
          }
        ],
        "start": 17,
        "end": 33
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 51
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "initializer": null,
            "computed": false,
            "start": 79,
            "end": 80
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "initializer": null,
            "computed": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 97,
              "end": 99
            },
            "computed": false,
            "start": 93,
            "end": 99
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "computed": false,
            "start": 105,
            "end": 114
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 128,
                "end": 129
              },
              "start": 124,
              "end": 129
            },
            "computed": false,
            "start": 120,
            "end": 129
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 139,
                "end": 140
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "computed": false,
            "start": 135,
            "end": 144
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 155,
                "end": 156
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 159,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "computed": false,
            "start": 150,
            "end": 161
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "start": 173,
                "end": 178
              },
              "prefix": true,
              "start": 171,
              "end": 179
            },
            "computed": false,
            "start": 167,
            "end": 179
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 195,
                "end": 196
              },
              "start": 189,
              "end": 196
            },
            "computed": false,
            "start": 185,
            "end": 196
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 206,
                "end": 207
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "computed": false,
            "start": 202,
            "end": 211
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 223,
                  "end": 224
                },
                "operator": "|",
                "right": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 227,
                  "end": 228
                },
                "start": 223,
                "end": 228
              },
              "prefix": true,
              "start": 221,
              "end": 229
            },
            "computed": false,
            "start": 217,
            "end": 229
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "prefix": true,
              "start": 239,
              "end": 241
            },
            "computed": false,
            "start": 235,
            "end": 241
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "operator": "<<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "start": 251,
              "end": 257
            },
            "computed": false,
            "start": 247,
            "end": 257
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 272,
                "end": 273
              },
              "start": 267,
              "end": 273
            },
            "computed": false,
            "start": 263,
            "end": 273
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "operator": ">>",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "start": 283,
              "end": 289
            },
            "computed": false,
            "start": 279,
            "end": 289
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 304,
                "end": 305
              },
              "start": 299,
              "end": 305
            },
            "computed": false,
            "start": 295,
            "end": 305
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PQ",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 313
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 317
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 321,
                "end": 322
              },
              "start": 316,
              "end": 322
            },
            "computed": false,
            "start": 311,
            "end": 322
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
              "prefix": true,
              "start": 332,
              "end": 334
            },
            "computed": false,
            "start": 328,
            "end": 334
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 348,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "computed": false,
            "start": 340,
            "end": 349
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 359,
                "end": 360
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "start": 359,
              "end": 364
            },
            "computed": false,
            "start": 355,
            "end": 364
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 379
              },
              "start": 374,
              "end": 379
            },
            "computed": false,
            "start": 370,
            "end": 379
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 390
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 393,
                "end": 394
              },
              "start": 389,
              "end": 394
            },
            "computed": false,
            "start": 385,
            "end": 394
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 404,
                "end": 406
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "start": 404,
              "end": 410
            },
            "computed": false,
            "start": 400,
            "end": 410
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 425
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "optional": false,
              "computed": false,
              "start": 420,
              "end": 427
            },
            "computed": false,
            "start": 416,
            "end": 427
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W1",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 519
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 524
            },
            "computed": false,
            "start": 517,
            "end": 524
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W2",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A0",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 543
              },
              "optional": false,
              "computed": false,
              "start": 535,
              "end": 543
            },
            "computed": false,
            "start": 530,
            "end": 543
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W3",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 551
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 559
              },
              "property": {
                "type": "Literal",
                "value": "A0",
                "raw": "\"A0\"",
                "start": 560,
                "end": 564
              },
              "optional": false,
              "computed": true,
              "start": 554,
              "end": 565
            },
            "computed": false,
            "start": 549,
            "end": 565
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W4",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 573
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 581
              },
              "property": {
                "type": "Literal",
                "value": "W",
                "raw": "\"W\"",
                "start": 582,
                "end": 585
              },
              "optional": false,
              "computed": true,
              "start": 576,
              "end": 586
            },
            "computed": false,
            "start": 571,
            "end": 586
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W5",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 602
              },
              "property": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "V",
                      "cooked": "V"
                    },
                    "tail": true,
                    "start": 603,
                    "end": 606
                  }
                ],
                "expressions": [],
                "start": 603,
                "end": 606
              },
              "optional": false,
              "computed": true,
              "start": 597,
              "end": 607
            },
            "computed": false,
            "start": 592,
            "end": 607
          }
        ],
        "start": 52,
        "end": 610
      },
      "const": true,
      "declare": false,
      "start": 35,
      "end": 610
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comments",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 631
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "//",
              "raw": "\"//\"",
              "start": 638,
              "end": 642
            },
            "initializer": null,
            "computed": false,
            "start": 638,
            "end": 642
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "/*",
              "raw": "\"/*\"",
              "start": 648,
              "end": 652
            },
            "initializer": null,
            "computed": false,
            "start": 648,
            "end": 652
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "*/",
              "raw": "\"*/\"",
              "start": 658,
              "end": 662
            },
            "initializer": null,
            "computed": false,
            "start": 658,
            "end": 662
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "///",
              "raw": "\"///\"",
              "start": 668,
              "end": 673
            },
            "initializer": null,
            "computed": false,
            "start": 668,
            "end": 673
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "#",
              "raw": "\"#\"",
              "start": 679,
              "end": 682
            },
            "initializer": null,
            "computed": false,
            "start": 679,
            "end": 682
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "<!--",
              "raw": "\"<!--\"",
              "start": 688,
              "end": 694
            },
            "initializer": null,
            "computed": false,
            "start": 688,
            "end": 694
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "-->",
              "raw": "\"-->\"",
              "start": 700,
              "end": 705
            },
            "initializer": null,
            "computed": false,
            "start": 700,
            "end": 705
          }
        ],
        "start": 632,
        "end": 708
      },
      "const": true,
      "declare": false,
      "start": 612,
      "end": 708
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 721
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 774,
                        "end": 775
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 808,
                                "end": 809
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 828,
                                      "end": 830
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 833,
                                      "end": 834
                                    },
                                    "computed": false,
                                    "start": 828,
                                    "end": 834
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 852,
                                      "end": 854
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 857,
                                                "end": 858
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 859,
                                                "end": 860
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 857,
                                              "end": 860
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 861,
                                              "end": 862
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 857,
                                            "end": 862
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 863,
                                            "end": 864
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 857,
                                          "end": 864
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "V1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 865,
                                          "end": 867
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 857,
                                        "end": 867
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100",
                                        "start": 870,
                                        "end": 873
                                      },
                                      "start": 857,
                                      "end": 873
                                    },
                                    "computed": false,
                                    "start": 852,
                                    "end": 873
                                  }
                                ],
                                "start": 810,
                                "end": 887
                              },
                              "const": true,
                              "declare": false,
                              "start": 797,
                              "end": 887
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 790,
                            "end": 887
                          }
                        ],
                        "start": 776,
                        "end": 897
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 764,
                      "end": 897
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 757,
                    "end": 897
                  }
                ],
                "start": 747,
                "end": 903
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 735,
              "end": 903
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 728,
            "end": 903
          }
        ],
        "start": 722,
        "end": 905
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 710,
      "end": 905
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 918
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 943
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1005,
                                "end": 1006
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1025,
                                      "end": 1027
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1030,
                                                "end": 1031
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1032,
                                                "end": 1033
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1030,
                                              "end": 1033
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1034,
                                              "end": 1035
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1030,
                                            "end": 1035
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1036,
                                            "end": 1037
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1030,
                                          "end": 1037
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": "V2",
                                          "raw": "\"V2\"",
                                          "start": 1038,
                                          "end": 1042
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1030,
                                        "end": 1043
                                      },
                                      "operator": "&",
                                      "right": {
                                        "type": "Literal",
                                        "value": 200,
                                        "raw": "200",
                                        "start": 1046,
                                        "end": 1049
                                      },
                                      "start": 1030,
                                      "end": 1049
                                    },
                                    "computed": false,
                                    "start": 1025,
                                    "end": 1049
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1067,
                                      "end": 1069
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1072,
                                                "end": 1073
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1074,
                                                "end": 1075
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1072,
                                              "end": 1075
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1076,
                                              "end": 1077
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1072,
                                            "end": 1077
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1078,
                                            "end": 1079
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1072,
                                          "end": 1079
                                        },
                                        "property": {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "V1",
                                                "cooked": "V1"
                                              },
                                              "tail": true,
                                              "start": 1080,
                                              "end": 1084
                                            }
                                          ],
                                          "expressions": [],
                                          "start": 1080,
                                          "end": 1084
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1072,
                                        "end": 1085
                                      },
                                      "operator": "<<",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1089,
                                        "end": 1090
                                      },
                                      "start": 1072,
                                      "end": 1090
                                    },
                                    "computed": false,
                                    "start": 1067,
                                    "end": 1090
                                  }
                                ],
                                "start": 1007,
                                "end": 1105
                              },
                              "const": true,
                              "declare": false,
                              "start": 994,
                              "end": 1105
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 987,
                            "end": 1105
                          }
                        ],
                        "start": 973,
                        "end": 1115
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 961,
                      "end": 1115
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 954,
                    "end": 1115
                  }
                ],
                "start": 944,
                "end": 1121
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 932,
              "end": 1121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 925,
            "end": 1121
          }
        ],
        "start": 919,
        "end": 1123
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 907,
      "end": 1123
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1137
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1162
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1190,
                        "end": 1191
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1224,
                                "end": 1225
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1244,
                                      "end": 1246
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1249,
                                      "end": 1251
                                    },
                                    "computed": false,
                                    "start": 1244,
                                    "end": 1251
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1269,
                                      "end": 1271
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1274,
                                      "end": 1277
                                    },
                                    "computed": false,
                                    "start": 1269,
                                    "end": 1277
                                  }
                                ],
                                "start": 1226,
                                "end": 1292
                              },
                              "const": true,
                              "declare": false,
                              "start": 1213,
                              "end": 1292
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1206,
                            "end": 1292
                          }
                        ],
                        "start": 1192,
                        "end": 1302
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1180,
                      "end": 1302
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1173,
                    "end": 1302
                  }
                ],
                "start": 1163,
                "end": 1308
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1151,
              "end": 1308
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1144,
            "end": 1308
          }
        ],
        "start": 1138,
        "end": 1310
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1125,
      "end": 1310
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1322,
        "end": 1324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1349
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1377,
                        "end": 1378
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1411,
                                "end": 1412
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1431,
                                      "end": 1433
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1436,
                                      "end": 1438
                                    },
                                    "computed": false,
                                    "start": 1431,
                                    "end": 1438
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1456,
                                      "end": 1458
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1461,
                                      "end": 1464
                                    },
                                    "computed": false,
                                    "start": 1456,
                                    "end": 1464
                                  }
                                ],
                                "start": 1413,
                                "end": 1479
                              },
                              "const": true,
                              "declare": false,
                              "start": 1400,
                              "end": 1479
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1393,
                            "end": 1479
                          }
                        ],
                        "start": 1379,
                        "end": 1489
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1367,
                      "end": 1489
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1360,
                    "end": 1489
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1563,
                        "end": 1564
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
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
                                  "start": 1583,
                                  "end": 1584
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1587,
                                  "end": 1588
                                },
                                "definite": false,
                                "start": 1583,
                                "end": 1588
                              }
                            ],
                            "declare": false,
                            "start": 1579,
                            "end": 1588
                          }
                        ],
                        "start": 1565,
                        "end": 1598
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1553,
                      "end": 1598
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1546,
                    "end": 1598
                  }
                ],
                "start": 1350,
                "end": 1604
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1338,
              "end": 1604
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1331,
            "end": 1604
          }
        ],
        "start": 1325,
        "end": 1606
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1312,
      "end": 1606
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1615,
        "end": 1616
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1620
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1622
            },
            "start": 1619,
            "end": 1622
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1623,
            "end": 1624
          },
          "start": 1619,
          "end": 1624
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1625,
          "end": 1626
        },
        "start": 1619,
        "end": 1626
      },
      "importKind": "value",
      "start": 1608,
      "end": 1627
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1640,
          "end": 1642
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1643,
          "end": 1644
        },
        "start": 1640,
        "end": 1644
      },
      "importKind": "value",
      "start": 1628,
      "end": 1645
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1653,
        "end": 1655
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1660
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1661,
          "end": 1662
        },
        "start": 1658,
        "end": 1662
      },
      "importKind": "value",
      "start": 1646,
      "end": 1663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1674,
        "end": 1678
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1682,
              "end": 1683
            },
            "start": 1680,
            "end": 1683
          },
          "start": 1679,
          "end": 1683
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1686,
          "end": 1690
        },
        "start": 1684,
        "end": 1690
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1701,
                "end": 1702
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1709,
                  "end": 1711
                },
                "optional": false,
                "computed": false,
                "start": 1707,
                "end": 1711
              },
              "start": 1701,
              "end": 1711
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1713,
              "end": 1720
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1734,
                  "end": 1735
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1740,
                    "end": 1741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1740,
                  "end": 1744
                },
                "start": 1734,
                "end": 1744
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1746,
                "end": 1753
              },
              "alternate": null,
              "start": 1730,
              "end": 1753
            },
            "start": 1697,
            "end": 1753
          }
        ],
        "start": 1691,
        "end": 1755
      },
      "expression": false,
      "start": 1665,
      "end": 1755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1770
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1774,
                    "end": 1776
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1777,
                    "end": 1778
                  },
                  "start": 1774,
                  "end": 1778
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1780
                },
                "start": 1774,
                "end": 1780
              },
              "typeArguments": null,
              "start": 1774,
              "end": 1780
            },
            "start": 1772,
            "end": 1780
          },
          "start": 1771,
          "end": 1780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1783,
          "end": 1787
        },
        "start": 1781,
        "end": 1787
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1799
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1804,
                      "end": 1806
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1808
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1804,
                    "end": 1808
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1810
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1804,
                  "end": 1810
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1813
                },
                "optional": false,
                "computed": false,
                "start": 1804,
                "end": 1813
              },
              "start": 1798,
              "end": 1813
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1815,
              "end": 1822
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1837
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1842,
                        "end": 1844
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1845,
                        "end": 1846
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1842,
                      "end": 1846
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1842,
                    "end": 1848
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1849,
                    "end": 1851
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1842,
                  "end": 1851
                },
                "start": 1836,
                "end": 1851
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1853,
                "end": 1860
              },
              "alternate": null,
              "start": 1832,
              "end": 1860
            },
            "start": 1794,
            "end": 1860
          }
        ],
        "start": 1788,
        "end": 1862
      },
      "expression": false,
      "start": 1757,
      "end": 1862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1877
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1883
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1881,
                  "end": 1885
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1886,
                  "end": 1887
                },
                "start": 1881,
                "end": 1887
              },
              "typeArguments": null,
              "start": 1881,
              "end": 1887
            },
            "start": 1879,
            "end": 1887
          },
          "start": 1878,
          "end": 1887
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1890,
          "end": 1894
        },
        "start": 1888,
        "end": 1894
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1906
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1911,
                      "end": 1913
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1915
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1911,
                    "end": 1915
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1917
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1911,
                  "end": 1917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1920
                },
                "optional": false,
                "computed": false,
                "start": 1911,
                "end": 1920
              },
              "start": 1905,
              "end": 1920
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1922,
              "end": 1929
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1943,
                  "end": 1944
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1949,
                        "end": 1951
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1952,
                        "end": 1953
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1949,
                      "end": 1953
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1954,
                      "end": 1955
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1949,
                    "end": 1955
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1958
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1949,
                  "end": 1958
                },
                "start": 1943,
                "end": 1958
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1960,
                "end": 1967
              },
              "alternate": null,
              "start": 1939,
              "end": 1967
            },
            "start": 1901,
            "end": 1967
          }
        ],
        "start": 1895,
        "end": 1969
      },
      "expression": false,
      "start": 1864,
      "end": 1969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1984
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1993
              },
              "typeArguments": null,
              "start": 1988,
              "end": 1993
            },
            "start": 1986,
            "end": 1993
          },
          "start": 1985,
          "end": 1993
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2009,
              "end": 2010
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2032
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2034
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2027,
                  "end": 2034
                },
                "consequent": [],
                "start": 2022,
                "end": 2035
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2049,
                    "end": 2054
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2056
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2049,
                  "end": 2056
                },
                "consequent": [],
                "start": 2044,
                "end": 2057
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2076
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2078
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2071,
                  "end": 2078
                },
                "consequent": [],
                "start": 2066,
                "end": 2079
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2098
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2099,
                    "end": 2100
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2093,
                  "end": 2100
                },
                "consequent": [],
                "start": 2088,
                "end": 2101
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2115,
                    "end": 2120
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2121,
                    "end": 2122
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2115,
                  "end": 2122
                },
                "consequent": [],
                "start": 2110,
                "end": 2123
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2137,
                    "end": 2142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2143,
                    "end": 2144
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2137,
                  "end": 2144
                },
                "consequent": [],
                "start": 2132,
                "end": 2145
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2159,
                    "end": 2164
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2165,
                    "end": 2166
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2159,
                  "end": 2166
                },
                "consequent": [],
                "start": 2154,
                "end": 2167
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2181,
                    "end": 2186
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2187,
                    "end": 2188
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2181,
                  "end": 2188
                },
                "consequent": [],
                "start": 2176,
                "end": 2189
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2203,
                    "end": 2208
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2209,
                    "end": 2210
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2203,
                  "end": 2210
                },
                "consequent": [],
                "start": 2198,
                "end": 2211
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2225,
                    "end": 2230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2232
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2225,
                  "end": 2232
                },
                "consequent": [],
                "start": 2220,
                "end": 2233
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2247,
                    "end": 2252
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2253,
                    "end": 2254
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2247,
                  "end": 2254
                },
                "consequent": [],
                "start": 2242,
                "end": 2255
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2275,
                    "end": 2276
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2269,
                  "end": 2276
                },
                "consequent": [],
                "start": 2264,
                "end": 2277
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2291,
                    "end": 2296
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2297,
                    "end": 2298
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2291,
                  "end": 2298
                },
                "consequent": [],
                "start": 2286,
                "end": 2299
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2318
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2319,
                    "end": 2320
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2313,
                  "end": 2320
                },
                "consequent": [],
                "start": 2308,
                "end": 2321
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2341,
                    "end": 2342
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2335,
                  "end": 2342
                },
                "consequent": [],
                "start": 2330,
                "end": 2343
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2357,
                    "end": 2362
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2363,
                    "end": 2364
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2357,
                  "end": 2364
                },
                "consequent": [],
                "start": 2352,
                "end": 2365
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2379,
                    "end": 2384
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PQ",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2385,
                    "end": 2387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2379,
                  "end": 2387
                },
                "consequent": [],
                "start": 2374,
                "end": 2388
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2402,
                    "end": 2407
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2408,
                    "end": 2409
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2402,
                  "end": 2409
                },
                "consequent": [],
                "start": 2397,
                "end": 2410
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2424,
                    "end": 2429
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2430,
                    "end": 2431
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2424,
                  "end": 2431
                },
                "consequent": [],
                "start": 2419,
                "end": 2432
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2446,
                    "end": 2451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2452,
                    "end": 2453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2446,
                  "end": 2453
                },
                "consequent": [],
                "start": 2441,
                "end": 2454
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2468,
                    "end": 2473
                  },
                  "property": {
                    "type": "Literal",
                    "value": "T",
                    "raw": "\"T\"",
                    "start": 2474,
                    "end": 2477
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2468,
                  "end": 2478
                },
                "consequent": [],
                "start": 2463,
                "end": 2479
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2498
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "U",
                          "cooked": "U"
                        },
                        "tail": true,
                        "start": 2499,
                        "end": 2502
                      }
                    ],
                    "expressions": [],
                    "start": 2499,
                    "end": 2502
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2493,
                  "end": 2503
                },
                "consequent": [],
                "start": 2488,
                "end": 2504
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2518,
                    "end": 2523
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2524,
                    "end": 2525
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2518,
                  "end": 2525
                },
                "consequent": [],
                "start": 2513,
                "end": 2526
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2540,
                    "end": 2545
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2546,
                    "end": 2547
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2540,
                  "end": 2547
                },
                "consequent": [],
                "start": 2535,
                "end": 2548
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2562,
                    "end": 2567
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2570
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2562,
                  "end": 2570
                },
                "consequent": [],
                "start": 2557,
                "end": 2571
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2585,
                    "end": 2590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2593
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2585,
                  "end": 2593
                },
                "consequent": [],
                "start": 2580,
                "end": 2594
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2608,
                    "end": 2613
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2614,
                    "end": 2616
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2608,
                  "end": 2616
                },
                "consequent": [],
                "start": 2603,
                "end": 2617
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2631,
                    "end": 2636
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2639
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2631,
                  "end": 2639
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2653,
                    "end": 2659
                  }
                ],
                "start": 2626,
                "end": 2659
              }
            ],
            "start": 2001,
            "end": 2665
          }
        ],
        "start": 1995,
        "end": 2667
      },
      "expression": false,
      "start": 1972,
      "end": 2667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2678,
        "end": 2681
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2685,
                      "end": 2686
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2687,
                      "end": 2688
                    },
                    "start": 2685,
                    "end": 2688
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2689,
                    "end": 2690
                  },
                  "start": 2685,
                  "end": 2690
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2692
                },
                "start": 2685,
                "end": 2692
              },
              "typeArguments": null,
              "start": 2685,
              "end": 2692
            },
            "start": 2683,
            "end": 2692
          },
          "start": 2682,
          "end": 2692
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2695,
          "end": 2701
        },
        "start": 2693,
        "end": 2701
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2716,
              "end": 2717
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2734,
                          "end": 2735
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2736,
                          "end": 2737
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2734,
                        "end": 2737
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2738,
                        "end": 2739
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2734,
                      "end": 2739
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2741
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2734,
                    "end": 2741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2742,
                    "end": 2744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2734,
                  "end": 2744
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2753,
                      "end": 2754
                    },
                    "start": 2746,
                    "end": 2755
                  }
                ],
                "start": 2729,
                "end": 2755
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2769,
                          "end": 2770
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2771,
                          "end": 2772
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2769,
                        "end": 2772
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2773,
                        "end": 2774
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2769,
                      "end": 2774
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2775,
                      "end": 2776
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2769,
                    "end": 2776
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2777,
                    "end": 2779
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2769,
                  "end": 2779
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2788,
                      "end": 2789
                    },
                    "start": 2781,
                    "end": 2790
                  }
                ],
                "start": 2764,
                "end": 2790
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2804,
                          "end": 2805
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2806,
                          "end": 2807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2804,
                        "end": 2807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2808,
                        "end": 2809
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2804,
                      "end": 2809
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2810,
                      "end": 2811
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2804,
                    "end": 2811
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2812,
                    "end": 2814
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2804,
                  "end": 2814
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2823,
                      "end": 2824
                    },
                    "start": 2816,
                    "end": 2825
                  }
                ],
                "start": 2799,
                "end": 2825
              }
            ],
            "start": 2708,
            "end": 2831
          }
        ],
        "start": 2702,
        "end": 2833
      },
      "expression": false,
      "start": 2669,
      "end": 2833
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2844,
        "end": 2847
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Comments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2851,
                "end": 2859
              },
              "typeArguments": null,
              "start": 2851,
              "end": 2859
            },
            "start": 2849,
            "end": 2859
          },
          "start": 2848,
          "end": 2859
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2876
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2893,
                    "end": 2901
                  },
                  "property": {
                    "type": "Literal",
                    "value": "//",
                    "raw": "\"//\"",
                    "start": 2902,
                    "end": 2906
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2893,
                  "end": 2907
                },
                "consequent": [],
                "start": 2888,
                "end": 2908
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2922,
                    "end": 2930
                  },
                  "property": {
                    "type": "Literal",
                    "value": "/*",
                    "raw": "\"/*\"",
                    "start": 2931,
                    "end": 2935
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2922,
                  "end": 2936
                },
                "consequent": [],
                "start": 2917,
                "end": 2937
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2951,
                    "end": 2959
                  },
                  "property": {
                    "type": "Literal",
                    "value": "*/",
                    "raw": "\"*/\"",
                    "start": 2960,
                    "end": 2964
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2951,
                  "end": 2965
                },
                "consequent": [],
                "start": 2946,
                "end": 2966
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2980,
                    "end": 2988
                  },
                  "property": {
                    "type": "Literal",
                    "value": "///",
                    "raw": "\"///\"",
                    "start": 2989,
                    "end": 2994
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2980,
                  "end": 2995
                },
                "consequent": [],
                "start": 2975,
                "end": 2996
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3010,
                    "end": 3018
                  },
                  "property": {
                    "type": "Literal",
                    "value": "#",
                    "raw": "\"#\"",
                    "start": 3019,
                    "end": 3022
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3010,
                  "end": 3023
                },
                "consequent": [],
                "start": 3005,
                "end": 3024
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3038,
                    "end": 3046
                  },
                  "property": {
                    "type": "Literal",
                    "value": "<!--",
                    "raw": "\"<!--\"",
                    "start": 3047,
                    "end": 3053
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3038,
                  "end": 3054
                },
                "consequent": [],
                "start": 3033,
                "end": 3055
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3069,
                    "end": 3077
                  },
                  "property": {
                    "type": "Literal",
                    "value": "-->",
                    "raw": "\"-->\"",
                    "start": 3078,
                    "end": 3083
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3069,
                  "end": 3084
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3094,
                    "end": 3100
                  }
                ],
                "start": 3064,
                "end": 3100
              }
            ],
            "start": 2867,
            "end": 3106
          }
        ],
        "start": 2861,
        "end": 3108
      },
      "expression": false,
      "start": 2835,
      "end": 3108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3108
}
```
