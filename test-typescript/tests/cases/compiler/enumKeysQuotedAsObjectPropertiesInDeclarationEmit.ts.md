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
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 144,
        "body": {
          "type": "TSEnumBody",
          "start": 24,
          "end": 144,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 27,
              "end": 42,
              "computed": false,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSEnumMember",
              "start": 45,
              "end": 61,
              "computed": false,
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
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSEnumMember",
              "start": 64,
              "end": 81,
              "computed": false,
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
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSEnumMember",
              "start": 84,
              "end": 103,
              "computed": false,
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
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSEnumMember",
              "start": 106,
              "end": 125,
              "computed": false,
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
                "raw": "6",
                "value": 6,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSEnumMember",
              "start": 128,
              "end": 141,
              "computed": false,
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
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "MouseButton",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 376,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 376,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 375,
            "definite": false,
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
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 179,
                    "end": 183,
                    "raw": "'-1'",
                    "value": "-1",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 185,
                    "end": 206,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 196,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 206,
                      "decorators": [],
                      "name": "NO_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 209,
                  "end": 237,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 209,
                    "end": 212,
                    "raw": "\"0\"",
                    "value": "0",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 237,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 225,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 237,
                      "decorators": [],
                      "name": "LEFT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 240,
                  "end": 270,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 240,
                    "end": 243,
                    "raw": "\"1\"",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 245,
                    "end": 270,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 256,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 270,
                      "decorators": [],
                      "name": "MIDDLE_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 273,
                  "end": 302,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 273,
                    "end": 276,
                    "raw": "\"2\"",
                    "value": "2",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 278,
                    "end": 302,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 289,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 302,
                      "decorators": [],
                      "name": "RIGHT_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 305,
                  "end": 337,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 305,
                    "end": 308,
                    "raw": "\"3\"",
                    "value": "3",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 310,
                    "end": 337,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 321,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 337,
                      "decorators": [],
                      "name": "XBUTTON1_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 340,
                  "end": 372,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 340,
                    "end": 343,
                    "raw": "\"4\"",
                    "value": "4",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 345,
                    "end": 372,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 356,
                      "decorators": [],
                      "name": "MouseButton",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 372,
                      "decorators": [],
                      "name": "XBUTTON2_BUTTON",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
