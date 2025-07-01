__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "re",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/u",
            "regex": {
              "pattern": "(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})",
              "flags": "u"
            },
            "start": 9,
            "end": 56
          },
          "definite": false,
          "start": 4,
          "end": 56
        }
      ],
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 68
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "re",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exec",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 78
              },
              "optional": false,
              "computed": false,
              "start": 71,
              "end": 78
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "2015-01-02",
                "raw": "\"2015-01-02\"",
                "start": 79,
                "end": 91
              }
            ],
            "optional": false,
            "start": 71,
            "end": 92
          },
          "definite": false,
          "start": 62,
          "end": 92
        }
      ],
      "declare": false,
      "start": 58,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "date",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 112
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 113,
              "end": 114
            },
            "optional": false,
            "computed": true,
            "start": 106,
            "end": 115
          },
          "definite": false,
          "start": 99,
          "end": 115
        }
      ],
      "declare": false,
      "start": 95,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "year1",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groups",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "optional": false,
              "computed": false,
              "start": 130,
              "end": 143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "year",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 148
            },
            "optional": false,
            "computed": false,
            "start": 130,
            "end": 148
          },
          "definite": false,
          "start": 122,
          "end": 148
        }
      ],
      "declare": false,
      "start": 118,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "year2",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 159
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 168
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 169,
              "end": 170
            },
            "optional": false,
            "computed": true,
            "start": 162,
            "end": 171
          },
          "definite": false,
          "start": 154,
          "end": 171
        }
      ],
      "declare": false,
      "start": 150,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "month1",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 193
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groups",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 200
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 200
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "month",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 206
            },
            "optional": false,
            "computed": false,
            "start": 187,
            "end": 206
          },
          "definite": false,
          "start": 178,
          "end": 206
        }
      ],
      "declare": false,
      "start": 174,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "month2",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 218
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 227
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 228,
              "end": 229
            },
            "optional": false,
            "computed": true,
            "start": 221,
            "end": 230
          },
          "definite": false,
          "start": 212,
          "end": 230
        }
      ],
      "declare": false,
      "start": 208,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "day1",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groups",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 244,
              "end": 257
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "day",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 261
            },
            "optional": false,
            "computed": false,
            "start": 244,
            "end": 261
          },
          "definite": false,
          "start": 237,
          "end": 261
        }
      ],
      "declare": false,
      "start": 233,
      "end": 262
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "day2",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 271
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 281,
              "end": 282
            },
            "optional": false,
            "computed": true,
            "start": 274,
            "end": 283
          },
          "definite": false,
          "start": 267,
          "end": 283
        }
      ],
      "declare": false,
      "start": 263,
      "end": 284
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 293
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 296,
                      "end": 301
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 307
                    },
                    "optional": false,
                    "computed": false,
                    "start": 296,
                    "end": 307
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "/(?<bar>foo)/",
                      "regex": {
                        "pattern": "(?<bar>foo)",
                        "flags": ""
                      },
                      "start": 308,
                      "end": 321
                    }
                  ],
                  "optional": false,
                  "start": 296,
                  "end": 322
                },
                "start": 296,
                "end": 323
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groups",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 330
              },
              "optional": false,
              "computed": false,
              "start": 296,
              "end": 330
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 334
            },
            "optional": false,
            "computed": false,
            "start": 296,
            "end": 334
          },
          "definite": false,
          "start": 290,
          "end": 334
        }
      ],
      "declare": false,
      "start": 286,
      "end": 335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 335
}
```
