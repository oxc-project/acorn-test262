__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 376,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 144,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 144,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "MouseButton",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 24,
          "end": 144,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 27,
              "end": 42,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 38,
                "decorators": [],
                "name": "LEFT_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "value": 1,
                "raw": "1"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 45,
              "end": 61,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 57,
                "decorators": [],
                "name": "RIGHT_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 60,
                "end": 61,
                "value": 2,
                "raw": "2"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 64,
              "end": 81,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 77,
                "decorators": [],
                "name": "MIDDLE_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "value": 4,
                "raw": "4"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 84,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 99,
                "decorators": [],
                "name": "XBUTTON1_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 102,
                "end": 103,
                "value": 5,
                "raw": "5"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 106,
              "end": 125,
              "id": {
                "type": "Identifier",
                "start": 106,
                "end": 121,
                "decorators": [],
                "name": "XBUTTON2_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 124,
                "end": 125,
                "value": 6,
                "raw": "6"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 128,
              "end": 141,
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "decorators": [],
                "name": "NO_BUTTON",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 140,
                "end": 141,
                "value": 0,
                "raw": "0"
              },
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 376,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 376,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 375,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 173,
              "decorators": [],
              "name": "DOMMouseButton",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 176,
              "end": 375,
              "properties": [
                {
                  "type": "Property",
                  "start": 179,
                  "end": 206,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 179,
                    "end": 183,
                    "value": "-1",
                    "raw": "'-1'"
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 185,
                    "end": 206,
                    "object": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 196,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 206,
                      "decorators": [],
                      "name": "NO_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 209,
                  "end": 237,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 209,
                    "end": 212,
                    "value": "0",
                    "raw": "\"0\""
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 237,
                    "object": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 225,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 237,
                      "decorators": [],
                      "name": "LEFT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 240,
                  "end": 270,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 240,
                    "end": 243,
                    "value": "1",
                    "raw": "\"1\""
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 245,
                    "end": 270,
                    "object": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 256,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 270,
                      "decorators": [],
                      "name": "MIDDLE_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 273,
                  "end": 302,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 273,
                    "end": 276,
                    "value": "2",
                    "raw": "\"2\""
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 278,
                    "end": 302,
                    "object": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 289,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 302,
                      "decorators": [],
                      "name": "RIGHT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 305,
                  "end": 337,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 305,
                    "end": 308,
                    "value": "3",
                    "raw": "\"3\""
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 310,
                    "end": 337,
                    "object": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 321,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 337,
                      "decorators": [],
                      "name": "XBUTTON1_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 340,
                  "end": 372,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 340,
                    "end": 343,
                    "value": "4",
                    "raw": "\"4\""
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 345,
                    "end": 372,
                    "object": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 356,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 372,
                      "decorators": [],
                      "name": "XBUTTON2_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
