__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "re",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 56,
            "value": null,
            "raw": "/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/u",
            "regex": {
              "flags": "u",
              "pattern": "(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 71,
            "end": 92,
            "callee": {
              "type": "MemberExpression",
              "start": 71,
              "end": 78,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "name": "re",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 78,
                "name": "exec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 79,
                "end": 91,
                "value": "2015-01-02",
                "raw": "\"2015-01-02\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "name": "date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 115,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "name": "year1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 130,
            "end": 148,
            "object": {
              "type": "MemberExpression",
              "start": 130,
              "end": 143,
              "object": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "name": "groups",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "year",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 159,
            "name": "year2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 162,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 162,
              "end": 168,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "name": "month1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 206,
            "object": {
              "type": "MemberExpression",
              "start": 187,
              "end": 200,
              "object": {
                "type": "Identifier",
                "start": 187,
                "end": 193,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 194,
                "end": 200,
                "name": "groups",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 206,
              "name": "month",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 218,
            "name": "month2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 221,
            "end": 230,
            "object": {
              "type": "Identifier",
              "start": 221,
              "end": 227,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "name": "day1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 261,
            "object": {
              "type": "MemberExpression",
              "start": 244,
              "end": 257,
              "object": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 257,
                "name": "groups",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 258,
              "end": 261,
              "name": "day",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 271,
            "name": "day2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 274,
            "end": 283,
            "object": {
              "type": "Identifier",
              "start": 274,
              "end": 280,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 281,
              "end": 282,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 293,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 296,
            "end": 334,
            "object": {
              "type": "MemberExpression",
              "start": 296,
              "end": 330,
              "object": {
                "type": "TSNonNullExpression",
                "start": 296,
                "end": 323,
                "expression": {
                  "type": "CallExpression",
                  "start": 296,
                  "end": 322,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 296,
                    "end": 307,
                    "object": {
                      "type": "Literal",
                      "start": 296,
                      "end": 301,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 307,
                      "name": "match",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 308,
                      "end": 321,
                      "value": null,
                      "raw": "/(?<bar>foo)/",
                      "regex": {
                        "flags": "",
                        "pattern": "(?<bar>foo)"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "property": {
                "type": "Identifier",
                "start": 324,
                "end": 330,
                "name": "groups",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 331,
              "end": 334,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
