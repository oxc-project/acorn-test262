useRegexpGroups.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "re",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 56,
            "raw": "/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/u",
            "regex": {
              "flags": "u",
              "pattern": "(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})"
            },
            "value": {}
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 71,
            "end": 92,
            "arguments": [
              {
                "type": "Literal",
                "start": 79,
                "end": 91,
                "raw": "\"2015-01-02\"",
                "value": "2015-01-02"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 71,
              "end": 78,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "decorators": [],
                "name": "re",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 78,
                "decorators": [],
                "name": "exec",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "date",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 115,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "result",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "decorators": [],
            "name": "year1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 130,
            "end": 148,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 130,
              "end": 143,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "decorators": [],
                "name": "result",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "groups",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "decorators": [],
              "name": "year",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 159,
            "decorators": [],
            "name": "year2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 162,
            "end": 171,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 162,
              "end": 168,
              "decorators": [],
              "name": "result",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "decorators": [],
            "name": "month1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 206,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 187,
              "end": 200,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 187,
                "end": 193,
                "decorators": [],
                "name": "result",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 194,
                "end": 200,
                "decorators": [],
                "name": "groups",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 206,
              "decorators": [],
              "name": "month",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 218,
            "decorators": [],
            "name": "month2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 221,
            "end": 230,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 221,
              "end": 227,
              "decorators": [],
              "name": "result",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "day1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 261,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 244,
              "end": 257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "decorators": [],
                "name": "result",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 257,
                "decorators": [],
                "name": "groups",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 258,
              "end": 261,
              "decorators": [],
              "name": "day",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 271,
            "decorators": [],
            "name": "day2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 274,
            "end": 283,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 274,
              "end": 280,
              "decorators": [],
              "name": "result",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 281,
              "end": 282,
              "raw": "3",
              "value": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 293,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 296,
            "end": 334,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 296,
              "end": 330,
              "computed": false,
              "object": {
                "type": "TSNonNullExpression",
                "start": 296,
                "end": 323,
                "expression": {
                  "type": "CallExpression",
                  "start": 296,
                  "end": 322,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 308,
                      "end": 321,
                      "raw": "/(?<bar>foo)/",
                      "regex": {
                        "flags": "",
                        "pattern": "(?<bar>foo)"
                      },
                      "value": {}
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 296,
                    "end": 307,
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "start": 296,
                      "end": 301,
                      "raw": "\"foo\"",
                      "value": "foo"
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 307,
                      "decorators": [],
                      "name": "match",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 324,
                "end": 330,
                "decorators": [],
                "name": "groups",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 331,
              "end": 334,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
