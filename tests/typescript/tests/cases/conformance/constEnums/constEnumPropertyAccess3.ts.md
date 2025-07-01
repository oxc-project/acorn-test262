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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 12
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
              "start": 19,
              "end": 20
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 24,
                "end": 25
              },
              "prefix": true,
              "start": 23,
              "end": 25
            },
            "computed": false,
            "start": 19,
            "end": 25
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 36,
                "end": 37
              },
              "prefix": true,
              "start": 35,
              "end": 37
            },
            "computed": false,
            "start": 31,
            "end": 37
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
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
                  "start": 49,
                  "end": 50
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 53,
                  "end": 54
                },
                "start": 49,
                "end": 54
              },
              "prefix": true,
              "start": 47,
              "end": 55
            },
            "computed": false,
            "start": 43,
            "end": 55
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 67,
                  "end": 68
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 71,
                  "end": 72
                },
                "start": 67,
                "end": 72
              },
              "prefix": true,
              "start": 65,
              "end": 73
            },
            "computed": false,
            "start": 61,
            "end": 73
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 83,
                "end": 84
              },
              "operator": "-",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 87,
                "end": 89
              },
              "start": 83,
              "end": 89
            },
            "computed": false,
            "start": 79,
            "end": 89
          }
        ],
        "start": 13,
        "end": 92
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 106
          },
          "optional": false,
          "computed": false,
          "start": 94,
          "end": 106
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 94,
        "end": 108
      },
      "directive": null,
      "start": 94,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "optional": false,
            "computed": false,
            "start": 110,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 122
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 122
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 110,
        "end": 124
      },
      "directive": null,
      "start": 110,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "optional": false,
            "computed": false,
            "start": 126,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 126,
        "end": 140
      },
      "directive": null,
      "start": 126,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 142,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 154
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 142,
        "end": 156
      },
      "directive": null,
      "start": 142,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "property": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 161,
              "end": 164
            },
            "optional": false,
            "computed": true,
            "start": 159,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 159,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 159,
        "end": 176
      },
      "directive": null,
      "start": 159,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "property": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 180,
              "end": 183
            },
            "optional": false,
            "computed": true,
            "start": 178,
            "end": 184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 193
          },
          "optional": false,
          "computed": false,
          "start": 178,
          "end": 193
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 178,
        "end": 195
      },
      "directive": null,
      "start": 178,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "property": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 199,
              "end": 202
            },
            "optional": false,
            "computed": true,
            "start": 197,
            "end": 203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 197,
          "end": 212
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 197,
        "end": 214
      },
      "directive": null,
      "start": 197,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "property": {
              "type": "Literal",
              "value": "D",
              "raw": "\"D\"",
              "start": 218,
              "end": 221
            },
            "optional": false,
            "computed": true,
            "start": 216,
            "end": 222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 231
          },
          "optional": false,
          "computed": false,
          "start": 216,
          "end": 231
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 216,
        "end": 233
      },
      "directive": null,
      "start": 216,
      "end": 234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "property": {
              "type": "Literal",
              "value": "E",
              "raw": "\"E\"",
              "start": 237,
              "end": 240
            },
            "optional": false,
            "computed": true,
            "start": 235,
            "end": 241
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 250
          },
          "optional": false,
          "computed": false,
          "start": 235,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 235,
        "end": 252
      },
      "directive": null,
      "start": 235,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
}
```
