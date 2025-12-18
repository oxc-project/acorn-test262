__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MouseButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LEFT_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 38
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 41,
                "end": 42
              },
              "computed": false,
              "start": 27,
              "end": 42
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RIGHT_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 57
              },
              "initializer": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 60,
                "end": 61
              },
              "computed": false,
              "start": 45,
              "end": 61
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MIDDLE_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 77
              },
              "initializer": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 80,
                "end": 81
              },
              "computed": false,
              "start": 64,
              "end": 81
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "XBUTTON1_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 99
              },
              "initializer": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 102,
                "end": 103
              },
              "computed": false,
              "start": 84,
              "end": 103
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "XBUTTON2_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 121
              },
              "initializer": {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 124,
                "end": 125
              },
              "computed": false,
              "start": 106,
              "end": 125
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NO_BUTTON",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 137
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 140,
                "end": 141
              },
              "computed": false,
              "start": 128,
              "end": 141
            }
          ],
          "start": 24,
          "end": 144
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 144
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DOMMouseButton",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 173
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "-1",
                    "raw": "'-1'",
                    "start": 179,
                    "end": 183
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 196
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NO_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 206
                    },
                    "optional": false,
                    "computed": false,
                    "start": 185,
                    "end": 206
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 179,
                  "end": 206
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "\"0\"",
                    "start": 209,
                    "end": 212
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 225
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LEFT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 237
                    },
                    "optional": false,
                    "computed": false,
                    "start": 214,
                    "end": 237
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 209,
                  "end": 237
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 240,
                    "end": 243
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 256
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MIDDLE_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 270
                    },
                    "optional": false,
                    "computed": false,
                    "start": 245,
                    "end": 270
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 240,
                  "end": 270
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "2",
                    "raw": "\"2\"",
                    "start": 273,
                    "end": 276
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 289
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RIGHT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 278,
                    "end": 302
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 273,
                  "end": 302
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "3",
                    "raw": "\"3\"",
                    "start": 305,
                    "end": 308
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 321
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XBUTTON1_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 337
                    },
                    "optional": false,
                    "computed": false,
                    "start": 310,
                    "end": 337
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 305,
                  "end": 337
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "4",
                    "raw": "\"4\"",
                    "start": 340,
                    "end": 343
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 356
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XBUTTON2_BUTTON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 372
                    },
                    "optional": false,
                    "computed": false,
                    "start": 345,
                    "end": 372
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 340,
                  "end": 372
                }
              ],
              "start": 176,
              "end": 375
            },
            "definite": false,
            "start": 159,
            "end": 375
          }
        ],
        "declare": false,
        "start": 153,
        "end": 376
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 376
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 376
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 12,
    "end": 23,
    "range": [
      12,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "LEFT_BUTTON",
    "start": 27,
    "end": 38,
    "range": [
      27,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "RIGHT_BUTTON",
    "start": 45,
    "end": 57,
    "range": [
      45,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "MIDDLE_BUTTON",
    "start": 64,
    "end": 77,
    "range": [
      64,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "XBUTTON1_BUTTON",
    "start": 84,
    "end": 99,
    "range": [
      84,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "XBUTTON2_BUTTON",
    "start": 106,
    "end": 121,
    "range": [
      106,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "NO_BUTTON",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "DOMMouseButton",
    "start": 159,
    "end": 173,
    "range": [
      159,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "String",
    "value": "'-1'",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 185,
    "end": 196,
    "range": [
      185,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "NO_BUTTON",
    "start": 197,
    "end": 206,
    "range": [
      197,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 209,
    "end": 212,
    "range": [
      209,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 214,
    "end": 225,
    "range": [
      214,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "LEFT_BUTTON",
    "start": 226,
    "end": 237,
    "range": [
      226,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 245,
    "end": 256,
    "range": [
      245,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "MIDDLE_BUTTON",
    "start": 257,
    "end": 270,
    "range": [
      257,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 278,
    "end": 289,
    "range": [
      278,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "RIGHT_BUTTON",
    "start": 290,
    "end": 302,
    "range": [
      290,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 310,
    "end": 321,
    "range": [
      310,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "XBUTTON1_BUTTON",
    "start": 322,
    "end": 337,
    "range": [
      322,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseButton",
    "start": 345,
    "end": 356,
    "range": [
      345,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "XBUTTON2_BUTTON",
    "start": 357,
    "end": 372,
    "range": [
      357,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  }
]
```
