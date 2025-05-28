__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 253,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 92,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 23,
              "end": 25,
              "operator": "~",
              "argument": {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 35,
              "end": 37,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 47,
              "end": 55,
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "start": 49,
                "end": 54,
                "left": {
                  "type": "Literal",
                  "start": 49,
                  "end": 50,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 53,
                  "end": 54,
                  "value": 1,
                  "raw": "1"
                }
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 65,
              "end": 73,
              "operator": "-",
              "argument": {
                "type": "BinaryExpression",
                "start": 67,
                "end": 72,
                "left": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 71,
                  "end": 72,
                  "value": 2,
                  "raw": "2"
                }
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 83,
              "end": 89,
              "left": {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "value": 1,
                "raw": "1"
              },
              "operator": "-",
              "right": {
                "type": "Literal",
                "start": 87,
                "end": 89,
                "value": 10,
                "raw": "10"
              }
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 94,
        "end": 108,
        "callee": {
          "type": "MemberExpression",
          "start": 94,
          "end": 106,
          "object": {
            "type": "MemberExpression",
            "start": 94,
            "end": 97,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 106,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 125,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 124,
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 122,
          "object": {
            "type": "MemberExpression",
            "start": 110,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
            "start": 114,
            "end": 122,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 140,
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 138,
          "object": {
            "type": "MemberExpression",
            "start": 126,
            "end": 129,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
            "start": 130,
            "end": 138,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 157,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 156,
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 154,
          "object": {
            "type": "MemberExpression",
            "start": 142,
            "end": 145,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 177,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 176,
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 174,
          "object": {
            "type": "MemberExpression",
            "start": 159,
            "end": 165,
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 161,
              "end": 164,
              "value": "A",
              "raw": "\"A\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 174,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 195,
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 193,
          "object": {
            "type": "MemberExpression",
            "start": 178,
            "end": 184,
            "object": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 180,
              "end": 183,
              "value": "B",
              "raw": "\"B\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 193,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 197,
        "end": 214,
        "callee": {
          "type": "MemberExpression",
          "start": 197,
          "end": 212,
          "object": {
            "type": "MemberExpression",
            "start": 197,
            "end": 203,
            "object": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 199,
              "end": 202,
              "value": "C",
              "raw": "\"C\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 234,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 233,
        "callee": {
          "type": "MemberExpression",
          "start": 216,
          "end": 231,
          "object": {
            "type": "MemberExpression",
            "start": 216,
            "end": 222,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 218,
              "end": 221,
              "value": "D",
              "raw": "\"D\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 231,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 253,
      "expression": {
        "type": "CallExpression",
        "start": 235,
        "end": 252,
        "callee": {
          "type": "MemberExpression",
          "start": 235,
          "end": 250,
          "object": {
            "type": "MemberExpression",
            "start": 235,
            "end": 241,
            "object": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 237,
              "end": 240,
              "value": "E",
              "raw": "\"E\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 250,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
