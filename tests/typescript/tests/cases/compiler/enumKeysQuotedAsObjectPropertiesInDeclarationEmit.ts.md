__ESTREE_TEST__:PASS:
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
