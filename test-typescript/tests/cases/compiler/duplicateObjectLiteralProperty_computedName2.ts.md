duplicateObjectLiteralProperty_computedName2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 26,
            "raw": "\"s\"",
            "value": "s"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 54,
      "body": {
        "type": "TSEnumBody",
        "start": 36,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 38,
            "end": 52,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 42,
              "end": 52,
              "raw": "\"ENUM_KEY\"",
              "value": "ENUM_KEY"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 35,
        "decorators": [],
        "name": "E1",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 55,
      "end": 68,
      "body": {
        "type": "TSEnumBody",
        "start": 63,
        "end": 68,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 66,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 81,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 87,
                "end": 93,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 99,
                "end": 105,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 104,
                  "end": 105,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 146,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 145,
                  "end": 146,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 152,
                "end": 158,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 157,
                  "end": 158,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 187,
            "end": 233,
            "properties": [
              {
                "type": "Property",
                "start": 193,
                "end": 202,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 194,
                  "end": 198,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 196,
                    "decorators": [],
                    "name": "E1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 201,
                  "end": 202,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 208,
                "end": 217,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 209,
                  "end": 213,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 211,
                    "decorators": [],
                    "name": "E1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "t4",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 246,
            "end": 292,
            "properties": [
              {
                "type": "Property",
                "start": 252,
                "end": 261,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 253,
                  "end": 257,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 255,
                    "decorators": [],
                    "name": "E2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 260,
                  "end": 261,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 267,
                "end": 276,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 268,
                  "end": 272,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 270,
                    "decorators": [],
                    "name": "E2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
