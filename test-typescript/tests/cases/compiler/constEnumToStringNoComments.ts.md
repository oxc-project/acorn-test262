__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 94,
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 94,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 28,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 25,
              "end": 28,
              "raw": "100",
              "value": 100
            }
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 41,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 38,
              "end": 41,
              "raw": "0.5",
              "value": 0.5
            }
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "Z",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "raw": "2.",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 65,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 63,
              "end": 65,
              "argument": {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 79,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 75,
              "end": 79,
              "argument": {
                "type": "Literal",
                "start": 76,
                "end": 79,
                "raw": "1.5",
                "value": 1.5
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 85,
            "end": 92,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 89,
              "end": 92,
              "argument": {
                "type": "Literal",
                "start": 90,
                "end": 92,
                "raw": "1.",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "x0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 105,
            "end": 121,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 105,
              "end": 119,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 105,
                "end": 110,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 119,
                "decorators": [],
                "name": "toString",
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
      "start": 123,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 132,
            "end": 151,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 132,
              "end": 149,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 132,
                "end": 140,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 136,
                  "end": 139,
                  "raw": "\"X\"",
                  "value": "X"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 149,
                "decorators": [],
                "name": "toString",
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
      "start": 153,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 159,
            "decorators": [],
            "name": "y0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 178,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 162,
              "end": 176,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 162,
                "end": 167,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 176,
                "decorators": [],
                "name": "toString",
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
      "start": 180,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 186,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 208,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 206,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 189,
                "end": 197,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 193,
                  "end": 196,
                  "raw": "\"Y\"",
                  "value": "Y"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 198,
                "end": 206,
                "decorators": [],
                "name": "toString",
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
      "start": 210,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "z0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 219,
            "end": 235,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 219,
              "end": 233,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 219,
                "end": 224,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 222,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "Z",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 233,
                "decorators": [],
                "name": "toString",
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
      "start": 237,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 265,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 263,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 246,
                "end": 254,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 250,
                  "end": 253,
                  "raw": "\"Z\"",
                  "value": "Z"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 263,
                "decorators": [],
                "name": "toString",
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
      "start": 267,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "decorators": [],
            "name": "a0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 292,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 290,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 276,
                "end": 281,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 279,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 282,
                "end": 290,
                "decorators": [],
                "name": "toString",
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
      "start": 294,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 322,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 320,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 303,
                "end": 311,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 306,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 307,
                  "end": 310,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 320,
                "decorators": [],
                "name": "toString",
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
      "start": 324,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "b0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 333,
            "end": 349,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 333,
              "end": 347,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 333,
                "end": 338,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 336,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 339,
                "end": 347,
                "decorators": [],
                "name": "toString",
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
      "start": 351,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 357,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 379,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 377,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 360,
                "end": 368,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 363,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 364,
                  "end": 367,
                  "raw": "\"B\"",
                  "value": "B"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 369,
                "end": 377,
                "decorators": [],
                "name": "toString",
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
      "start": 381,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 406,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 387,
            "decorators": [],
            "name": "c0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 390,
            "end": 406,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 390,
              "end": 404,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 390,
                "end": 395,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 396,
                "end": 404,
                "decorators": [],
                "name": "toString",
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
      "start": 408,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 414,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 436,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 417,
              "end": 434,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 417,
                "end": 425,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 420,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 421,
                  "end": 424,
                  "raw": "\"C\"",
                  "value": "C"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 426,
                "end": 434,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
