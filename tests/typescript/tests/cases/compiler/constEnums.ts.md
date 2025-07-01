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
        "start": 717,
        "end": 718
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
                "start": 739,
                "end": 740
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
                        "start": 765,
                        "end": 766
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
                                "start": 799,
                                "end": 800
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
                                      "start": 819,
                                      "end": 821
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 824,
                                      "end": 825
                                    },
                                    "computed": false,
                                    "start": 819,
                                    "end": 825
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 843,
                                      "end": 845
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
                                                "start": 848,
                                                "end": 849
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 850,
                                                "end": 851
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 848,
                                              "end": 851
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 852,
                                              "end": 853
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 848,
                                            "end": 853
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 854,
                                            "end": 855
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 848,
                                          "end": 855
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "V1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 856,
                                          "end": 858
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 848,
                                        "end": 858
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100",
                                        "start": 861,
                                        "end": 864
                                      },
                                      "start": 848,
                                      "end": 864
                                    },
                                    "computed": false,
                                    "start": 843,
                                    "end": 864
                                  }
                                ],
                                "start": 801,
                                "end": 878
                              },
                              "const": true,
                              "declare": false,
                              "start": 788,
                              "end": 878
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 781,
                            "end": 878
                          }
                        ],
                        "start": 767,
                        "end": 888
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 758,
                      "end": 888
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 751,
                    "end": 888
                  }
                ],
                "start": 741,
                "end": 894
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 732,
              "end": 894
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 725,
            "end": 894
          }
        ],
        "start": 719,
        "end": 896
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 710,
      "end": 896
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 906
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
                "start": 927,
                "end": 928
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
                        "start": 953,
                        "end": 954
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
                                "start": 987,
                                "end": 988
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
                                      "start": 1007,
                                      "end": 1009
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
                                                "start": 1012,
                                                "end": 1013
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1014,
                                                "end": 1015
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1012,
                                              "end": 1015
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1016,
                                              "end": 1017
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1012,
                                            "end": 1017
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1018,
                                            "end": 1019
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1012,
                                          "end": 1019
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": "V2",
                                          "raw": "\"V2\"",
                                          "start": 1020,
                                          "end": 1024
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1012,
                                        "end": 1025
                                      },
                                      "operator": "&",
                                      "right": {
                                        "type": "Literal",
                                        "value": 200,
                                        "raw": "200",
                                        "start": 1028,
                                        "end": 1031
                                      },
                                      "start": 1012,
                                      "end": 1031
                                    },
                                    "computed": false,
                                    "start": 1007,
                                    "end": 1031
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1049,
                                      "end": 1051
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
                                                "start": 1054,
                                                "end": 1055
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1056,
                                                "end": 1057
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1054,
                                              "end": 1057
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1058,
                                              "end": 1059
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1054,
                                            "end": 1059
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1060,
                                            "end": 1061
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1054,
                                          "end": 1061
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
                                              "start": 1062,
                                              "end": 1066
                                            }
                                          ],
                                          "expressions": [],
                                          "start": 1062,
                                          "end": 1066
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1054,
                                        "end": 1067
                                      },
                                      "operator": "<<",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1071,
                                        "end": 1072
                                      },
                                      "start": 1054,
                                      "end": 1072
                                    },
                                    "computed": false,
                                    "start": 1049,
                                    "end": 1072
                                  }
                                ],
                                "start": 989,
                                "end": 1087
                              },
                              "const": true,
                              "declare": false,
                              "start": 976,
                              "end": 1087
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 969,
                            "end": 1087
                          }
                        ],
                        "start": 955,
                        "end": 1097
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 946,
                      "end": 1097
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 939,
                    "end": 1097
                  }
                ],
                "start": 929,
                "end": 1103
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 920,
              "end": 1103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 913,
            "end": 1103
          }
        ],
        "start": 907,
        "end": 1105
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 898,
      "end": 1105
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1116
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
                "start": 1137,
                "end": 1138
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
                        "start": 1163,
                        "end": 1164
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
                                "start": 1197,
                                "end": 1198
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
                                      "start": 1217,
                                      "end": 1219
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1222,
                                      "end": 1224
                                    },
                                    "computed": false,
                                    "start": 1217,
                                    "end": 1224
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1242,
                                      "end": 1244
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1247,
                                      "end": 1250
                                    },
                                    "computed": false,
                                    "start": 1242,
                                    "end": 1250
                                  }
                                ],
                                "start": 1199,
                                "end": 1265
                              },
                              "const": true,
                              "declare": false,
                              "start": 1186,
                              "end": 1265
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1179,
                            "end": 1265
                          }
                        ],
                        "start": 1165,
                        "end": 1275
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 1156,
                      "end": 1275
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1149,
                    "end": 1275
                  }
                ],
                "start": 1139,
                "end": 1281
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1130,
              "end": 1281
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1123,
            "end": 1281
          }
        ],
        "start": 1117,
        "end": 1283
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1107,
      "end": 1283
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1294
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
                "start": 1315,
                "end": 1316
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
                        "start": 1341,
                        "end": 1342
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
                                "start": 1375,
                                "end": 1376
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
                                      "start": 1395,
                                      "end": 1397
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1400,
                                      "end": 1402
                                    },
                                    "computed": false,
                                    "start": 1395,
                                    "end": 1402
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1420,
                                      "end": 1422
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1425,
                                      "end": 1428
                                    },
                                    "computed": false,
                                    "start": 1420,
                                    "end": 1428
                                  }
                                ],
                                "start": 1377,
                                "end": 1443
                              },
                              "const": true,
                              "declare": false,
                              "start": 1364,
                              "end": 1443
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1357,
                            "end": 1443
                          }
                        ],
                        "start": 1343,
                        "end": 1453
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 1334,
                      "end": 1453
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1327,
                    "end": 1453
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
                        "start": 1524,
                        "end": 1525
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
                                  "start": 1544,
                                  "end": 1545
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1548,
                                  "end": 1549
                                },
                                "definite": false,
                                "start": 1544,
                                "end": 1549
                              }
                            ],
                            "declare": false,
                            "start": 1540,
                            "end": 1549
                          }
                        ],
                        "start": 1526,
                        "end": 1559
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 1517,
                      "end": 1559
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1510,
                    "end": 1559
                  }
                ],
                "start": 1317,
                "end": 1565
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1308,
              "end": 1565
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1301,
            "end": 1565
          }
        ],
        "start": 1295,
        "end": 1567
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1285,
      "end": 1567
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1577
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
              "start": 1580,
              "end": 1581
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1583
            },
            "start": 1580,
            "end": 1583
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1584,
            "end": 1585
          },
          "start": 1580,
          "end": 1585
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1586,
          "end": 1587
        },
        "start": 1580,
        "end": 1587
      },
      "importKind": "value",
      "start": 1569,
      "end": 1588
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1596,
        "end": 1598
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1603
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1604,
          "end": 1605
        },
        "start": 1601,
        "end": 1605
      },
      "importKind": "value",
      "start": 1589,
      "end": 1606
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1614,
        "end": 1616
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1619,
          "end": 1621
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1622,
          "end": 1623
        },
        "start": 1619,
        "end": 1623
      },
      "importKind": "value",
      "start": 1607,
      "end": 1624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1639
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
                "start": 1643,
                "end": 1644
              },
              "typeArguments": null,
              "start": 1643,
              "end": 1644
            },
            "start": 1641,
            "end": 1644
          },
          "start": 1640,
          "end": 1644
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1647,
          "end": 1651
        },
        "start": 1645,
        "end": 1651
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
                "start": 1662,
                "end": 1663
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
                  "start": 1668,
                  "end": 1669
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1670,
                  "end": 1672
                },
                "optional": false,
                "computed": false,
                "start": 1668,
                "end": 1672
              },
              "start": 1662,
              "end": 1672
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1674,
              "end": 1681
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
                  "start": 1695,
                  "end": 1696
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
                    "start": 1701,
                    "end": 1702
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1703,
                    "end": 1705
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1701,
                  "end": 1705
                },
                "start": 1695,
                "end": 1705
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1707,
                "end": 1714
              },
              "alternate": null,
              "start": 1691,
              "end": 1714
            },
            "start": 1658,
            "end": 1714
          }
        ],
        "start": 1652,
        "end": 1716
      },
      "expression": false,
      "start": 1626,
      "end": 1716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1727,
        "end": 1731
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
                    "start": 1735,
                    "end": 1737
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1738,
                    "end": 1739
                  },
                  "start": 1735,
                  "end": 1739
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1740,
                  "end": 1741
                },
                "start": 1735,
                "end": 1741
              },
              "typeArguments": null,
              "start": 1735,
              "end": 1741
            },
            "start": 1733,
            "end": 1741
          },
          "start": 1732,
          "end": 1741
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1744,
          "end": 1748
        },
        "start": 1742,
        "end": 1748
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
                "start": 1759,
                "end": 1760
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
                      "start": 1765,
                      "end": 1767
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1768,
                      "end": 1769
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1765,
                    "end": 1769
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1771
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1765,
                  "end": 1771
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1772,
                  "end": 1774
                },
                "optional": false,
                "computed": false,
                "start": 1765,
                "end": 1774
              },
              "start": 1759,
              "end": 1774
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1776,
              "end": 1783
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
                  "start": 1797,
                  "end": 1798
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
                        "start": 1803,
                        "end": 1805
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1806,
                        "end": 1807
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1803,
                      "end": 1807
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1809
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1803,
                    "end": 1809
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1812
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1803,
                  "end": 1812
                },
                "start": 1797,
                "end": 1812
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1814,
                "end": 1821
              },
              "alternate": null,
              "start": 1793,
              "end": 1821
            },
            "start": 1755,
            "end": 1821
          }
        ],
        "start": 1749,
        "end": 1823
      },
      "expression": false,
      "start": 1718,
      "end": 1823
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1834,
        "end": 1838
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
                    "start": 1842,
                    "end": 1844
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1846
                  },
                  "start": 1842,
                  "end": 1846
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1848
                },
                "start": 1842,
                "end": 1848
              },
              "typeArguments": null,
              "start": 1842,
              "end": 1848
            },
            "start": 1840,
            "end": 1848
          },
          "start": 1839,
          "end": 1848
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1851,
          "end": 1855
        },
        "start": 1849,
        "end": 1855
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
                "start": 1866,
                "end": 1867
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
                      "start": 1872,
                      "end": 1874
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1876
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1872,
                    "end": 1876
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1877,
                    "end": 1878
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1872,
                  "end": 1878
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1881
                },
                "optional": false,
                "computed": false,
                "start": 1872,
                "end": 1881
              },
              "start": 1866,
              "end": 1881
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1883,
              "end": 1890
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
                  "start": 1904,
                  "end": 1905
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
                        "start": 1910,
                        "end": 1912
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1913,
                        "end": 1914
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1910,
                      "end": 1914
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1915,
                      "end": 1916
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1910,
                    "end": 1916
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1919
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1910,
                  "end": 1919
                },
                "start": 1904,
                "end": 1919
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1921,
                "end": 1928
              },
              "alternate": null,
              "start": 1900,
              "end": 1928
            },
            "start": 1862,
            "end": 1928
          }
        ],
        "start": 1856,
        "end": 1930
      },
      "expression": false,
      "start": 1825,
      "end": 1930
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1942,
        "end": 1945
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
                "start": 1949,
                "end": 1954
              },
              "typeArguments": null,
              "start": 1949,
              "end": 1954
            },
            "start": 1947,
            "end": 1954
          },
          "start": 1946,
          "end": 1954
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
              "start": 1970,
              "end": 1971
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
                    "start": 1988,
                    "end": 1993
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1994,
                    "end": 1995
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1988,
                  "end": 1995
                },
                "consequent": [],
                "start": 1983,
                "end": 1996
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
                    "start": 2010,
                    "end": 2015
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2016,
                    "end": 2017
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2010,
                  "end": 2017
                },
                "consequent": [],
                "start": 2005,
                "end": 2018
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
                    "start": 2032,
                    "end": 2037
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2039
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2032,
                  "end": 2039
                },
                "consequent": [],
                "start": 2027,
                "end": 2040
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
                    "start": 2054,
                    "end": 2059
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2060,
                    "end": 2061
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2054,
                  "end": 2061
                },
                "consequent": [],
                "start": 2049,
                "end": 2062
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
                    "start": 2076,
                    "end": 2081
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2082,
                    "end": 2083
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2076,
                  "end": 2083
                },
                "consequent": [],
                "start": 2071,
                "end": 2084
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
                    "start": 2098,
                    "end": 2103
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2105
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2098,
                  "end": 2105
                },
                "consequent": [],
                "start": 2093,
                "end": 2106
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
                    "start": 2120,
                    "end": 2125
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2126,
                    "end": 2127
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2120,
                  "end": 2127
                },
                "consequent": [],
                "start": 2115,
                "end": 2128
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
                    "start": 2142,
                    "end": 2147
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2148,
                    "end": 2149
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2142,
                  "end": 2149
                },
                "consequent": [],
                "start": 2137,
                "end": 2150
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
                    "start": 2164,
                    "end": 2169
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2170,
                    "end": 2171
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2164,
                  "end": 2171
                },
                "consequent": [],
                "start": 2159,
                "end": 2172
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
                    "start": 2186,
                    "end": 2191
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2192,
                    "end": 2193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2186,
                  "end": 2193
                },
                "consequent": [],
                "start": 2181,
                "end": 2194
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
                    "start": 2208,
                    "end": 2213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2215
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2208,
                  "end": 2215
                },
                "consequent": [],
                "start": 2203,
                "end": 2216
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
                    "start": 2230,
                    "end": 2235
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2236,
                    "end": 2237
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2230,
                  "end": 2237
                },
                "consequent": [],
                "start": 2225,
                "end": 2238
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
                    "start": 2252,
                    "end": 2257
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2258,
                    "end": 2259
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2252,
                  "end": 2259
                },
                "consequent": [],
                "start": 2247,
                "end": 2260
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
                    "start": 2274,
                    "end": 2279
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2280,
                    "end": 2281
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2274,
                  "end": 2281
                },
                "consequent": [],
                "start": 2269,
                "end": 2282
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
                    "start": 2296,
                    "end": 2301
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2302,
                    "end": 2303
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2296,
                  "end": 2303
                },
                "consequent": [],
                "start": 2291,
                "end": 2304
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
                    "start": 2318,
                    "end": 2323
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2324,
                    "end": 2325
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2318,
                  "end": 2325
                },
                "consequent": [],
                "start": 2313,
                "end": 2326
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
                    "start": 2340,
                    "end": 2345
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PQ",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2346,
                    "end": 2348
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2340,
                  "end": 2348
                },
                "consequent": [],
                "start": 2335,
                "end": 2349
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
                    "start": 2363,
                    "end": 2368
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2369,
                    "end": 2370
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2363,
                  "end": 2370
                },
                "consequent": [],
                "start": 2358,
                "end": 2371
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
                    "start": 2385,
                    "end": 2390
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2391,
                    "end": 2392
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2385,
                  "end": 2392
                },
                "consequent": [],
                "start": 2380,
                "end": 2393
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
                    "start": 2407,
                    "end": 2412
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2413,
                    "end": 2414
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2407,
                  "end": 2414
                },
                "consequent": [],
                "start": 2402,
                "end": 2415
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
                    "start": 2429,
                    "end": 2434
                  },
                  "property": {
                    "type": "Literal",
                    "value": "T",
                    "raw": "\"T\"",
                    "start": 2435,
                    "end": 2438
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2429,
                  "end": 2439
                },
                "consequent": [],
                "start": 2424,
                "end": 2440
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
                    "start": 2454,
                    "end": 2459
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
                        "start": 2460,
                        "end": 2463
                      }
                    ],
                    "expressions": [],
                    "start": 2460,
                    "end": 2463
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2454,
                  "end": 2464
                },
                "consequent": [],
                "start": 2449,
                "end": 2465
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
                    "start": 2479,
                    "end": 2484
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2485,
                    "end": 2486
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2479,
                  "end": 2486
                },
                "consequent": [],
                "start": 2474,
                "end": 2487
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
                    "start": 2501,
                    "end": 2506
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2507,
                    "end": 2508
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2501,
                  "end": 2508
                },
                "consequent": [],
                "start": 2496,
                "end": 2509
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
                    "start": 2523,
                    "end": 2528
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2529,
                    "end": 2531
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2523,
                  "end": 2531
                },
                "consequent": [],
                "start": 2518,
                "end": 2532
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
                    "start": 2546,
                    "end": 2551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2554
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2546,
                  "end": 2554
                },
                "consequent": [],
                "start": 2541,
                "end": 2555
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
                    "start": 2569,
                    "end": 2574
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2575,
                    "end": 2577
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2569,
                  "end": 2577
                },
                "consequent": [],
                "start": 2564,
                "end": 2578
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
                    "start": 2592,
                    "end": 2597
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2598,
                    "end": 2600
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2592,
                  "end": 2600
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2614,
                    "end": 2620
                  }
                ],
                "start": 2587,
                "end": 2620
              }
            ],
            "start": 1962,
            "end": 2626
          }
        ],
        "start": 1956,
        "end": 2628
      },
      "expression": false,
      "start": 1933,
      "end": 2628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2639,
        "end": 2642
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
                      "start": 2646,
                      "end": 2647
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2648,
                      "end": 2649
                    },
                    "start": 2646,
                    "end": 2649
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2650,
                    "end": 2651
                  },
                  "start": 2646,
                  "end": 2651
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2652,
                  "end": 2653
                },
                "start": 2646,
                "end": 2653
              },
              "typeArguments": null,
              "start": 2646,
              "end": 2653
            },
            "start": 2644,
            "end": 2653
          },
          "start": 2643,
          "end": 2653
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2656,
          "end": 2662
        },
        "start": 2654,
        "end": 2662
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
              "start": 2677,
              "end": 2678
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
                          "start": 2695,
                          "end": 2696
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2697,
                          "end": 2698
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2695,
                        "end": 2698
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2699,
                        "end": 2700
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2695,
                      "end": 2700
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2701,
                      "end": 2702
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2695,
                    "end": 2702
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2703,
                    "end": 2705
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2695,
                  "end": 2705
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2714,
                      "end": 2715
                    },
                    "start": 2707,
                    "end": 2716
                  }
                ],
                "start": 2690,
                "end": 2716
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
                          "start": 2730,
                          "end": 2731
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2732,
                          "end": 2733
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2730,
                        "end": 2733
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2734,
                        "end": 2735
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2730,
                      "end": 2735
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2736,
                      "end": 2737
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2730,
                    "end": 2737
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2738,
                    "end": 2740
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2730,
                  "end": 2740
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2749,
                      "end": 2750
                    },
                    "start": 2742,
                    "end": 2751
                  }
                ],
                "start": 2725,
                "end": 2751
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
                          "start": 2765,
                          "end": 2766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2767,
                          "end": 2768
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2765,
                        "end": 2768
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2769,
                        "end": 2770
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2765,
                      "end": 2770
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2771,
                      "end": 2772
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2765,
                    "end": 2772
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2773,
                    "end": 2775
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2765,
                  "end": 2775
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2784,
                      "end": 2785
                    },
                    "start": 2777,
                    "end": 2786
                  }
                ],
                "start": 2760,
                "end": 2786
              }
            ],
            "start": 2669,
            "end": 2792
          }
        ],
        "start": 2663,
        "end": 2794
      },
      "expression": false,
      "start": 2630,
      "end": 2794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2805,
        "end": 2808
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
                "start": 2812,
                "end": 2820
              },
              "typeArguments": null,
              "start": 2812,
              "end": 2820
            },
            "start": 2810,
            "end": 2820
          },
          "start": 2809,
          "end": 2820
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
              "start": 2836,
              "end": 2837
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
                    "start": 2854,
                    "end": 2862
                  },
                  "property": {
                    "type": "Literal",
                    "value": "//",
                    "raw": "\"//\"",
                    "start": 2863,
                    "end": 2867
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2854,
                  "end": 2868
                },
                "consequent": [],
                "start": 2849,
                "end": 2869
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
                    "start": 2883,
                    "end": 2891
                  },
                  "property": {
                    "type": "Literal",
                    "value": "/*",
                    "raw": "\"/*\"",
                    "start": 2892,
                    "end": 2896
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2883,
                  "end": 2897
                },
                "consequent": [],
                "start": 2878,
                "end": 2898
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
                    "start": 2912,
                    "end": 2920
                  },
                  "property": {
                    "type": "Literal",
                    "value": "*/",
                    "raw": "\"*/\"",
                    "start": 2921,
                    "end": 2925
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2912,
                  "end": 2926
                },
                "consequent": [],
                "start": 2907,
                "end": 2927
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
                    "start": 2941,
                    "end": 2949
                  },
                  "property": {
                    "type": "Literal",
                    "value": "///",
                    "raw": "\"///\"",
                    "start": 2950,
                    "end": 2955
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2941,
                  "end": 2956
                },
                "consequent": [],
                "start": 2936,
                "end": 2957
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
                    "start": 2971,
                    "end": 2979
                  },
                  "property": {
                    "type": "Literal",
                    "value": "#",
                    "raw": "\"#\"",
                    "start": 2980,
                    "end": 2983
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2971,
                  "end": 2984
                },
                "consequent": [],
                "start": 2966,
                "end": 2985
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
                    "start": 2999,
                    "end": 3007
                  },
                  "property": {
                    "type": "Literal",
                    "value": "<!--",
                    "raw": "\"<!--\"",
                    "start": 3008,
                    "end": 3014
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2999,
                  "end": 3015
                },
                "consequent": [],
                "start": 2994,
                "end": 3016
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
                    "start": 3030,
                    "end": 3038
                  },
                  "property": {
                    "type": "Literal",
                    "value": "-->",
                    "raw": "\"-->\"",
                    "start": 3039,
                    "end": 3044
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3030,
                  "end": 3045
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3055,
                    "end": 3061
                  }
                ],
                "start": 3025,
                "end": 3061
              }
            ],
            "start": 2828,
            "end": 3067
          }
        ],
        "start": 2822,
        "end": 3069
      },
      "expression": false,
      "start": 2796,
      "end": 3069
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3069
}
```
