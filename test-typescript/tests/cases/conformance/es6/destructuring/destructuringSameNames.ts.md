destructuringSameNames.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 898,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 50,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 20,
            "end": 37,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 25,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 27,
                "end": 35,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 30,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 35,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 50,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 48,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 53,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 53,
          "end": 65,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 55,
              "end": 58,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 58,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 55,
                "end": 58,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 60,
              "end": 63,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 63,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 60,
                "end": 63,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 68,
          "end": 78,
          "properties": [
            {
              "type": "Property",
              "start": 70,
              "end": 76,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 75,
                "end": 76,
                "raw": "2",
                "value": 2
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 114,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 112,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 82,
          "end": 99,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 84,
              "end": 87,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 87,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 87,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 89,
              "end": 97,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 92,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 102,
          "end": 112,
          "properties": [
            {
              "type": "Property",
              "start": 104,
              "end": 110,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 107,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "raw": "3",
                "value": 3
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 116,
          "end": 133,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 118,
              "end": 126,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 121,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 123,
                "end": 126,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 128,
              "end": 131,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 136,
          "end": 146,
          "properties": [
            {
              "type": "Property",
              "start": 138,
              "end": 144,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 143,
                "end": 144,
                "raw": "4",
                "value": 4
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 150,
          "end": 167,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 152,
              "end": 155,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 157,
              "end": 165,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 170,
          "end": 189,
          "properties": [
            {
              "type": "Property",
              "start": 172,
              "end": 178,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 175,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 177,
                "end": 178,
                "raw": "3",
                "value": 3
              }
            },
            {
              "type": "Property",
              "start": 180,
              "end": 187,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 180,
                "end": 183,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 185,
                "end": 187,
                "raw": "33",
                "value": 33
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 234,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 232,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 193,
          "end": 210,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 195,
              "end": 203,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 205,
              "end": 208,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 213,
          "end": 232,
          "properties": [
            {
              "type": "Property",
              "start": 215,
              "end": 221,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 215,
                "end": 218,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 220,
                "end": 221,
                "raw": "4",
                "value": 4
              }
            },
            {
              "type": "Property",
              "start": 223,
              "end": 230,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 223,
                "end": 226,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 228,
                "end": 230,
                "raw": "44",
                "value": 44
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 273,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 271,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 236,
          "end": 258,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 238,
              "end": 246,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 238,
                "end": 241,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 243,
                "end": 246,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 248,
              "end": 256,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 253,
                "end": 256,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 261,
          "end": 271,
          "properties": [
            {
              "type": "Property",
              "start": 263,
              "end": 269,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 266,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 268,
                "end": 269,
                "raw": "5",
                "value": 5
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 321,
      "expression": {
        "type": "AssignmentExpression",
        "start": 275,
        "end": 319,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 275,
          "end": 297,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 277,
              "end": 285,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 277,
                "end": 280,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 282,
                "end": 285,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 287,
              "end": 295,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 287,
                "end": 290,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 292,
                "end": 295,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 300,
          "end": 319,
          "properties": [
            {
              "type": "Property",
              "start": 302,
              "end": 308,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 302,
                "end": 305,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 307,
                "end": 308,
                "raw": "6",
                "value": 6
              }
            },
            {
              "type": "Property",
              "start": 310,
              "end": 317,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 310,
                "end": 313,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 315,
                "end": 317,
                "raw": "66",
                "value": 66
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 360,
      "expression": {
        "type": "AssignmentExpression",
        "start": 323,
        "end": 358,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 323,
          "end": 345,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 325,
              "end": 333,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 325,
                "end": 328,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 330,
                "end": 333,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 335,
              "end": 343,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 335,
                "end": 338,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 348,
          "end": 358,
          "properties": [
            {
              "type": "Property",
              "start": 350,
              "end": 356,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 350,
                "end": 353,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 355,
                "end": 356,
                "raw": "7",
                "value": 7
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 387,
      "expression": {
        "type": "AssignmentExpression",
        "start": 362,
        "end": 386,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 362,
          "end": 372,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 363,
              "end": 366,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 368,
              "end": 371,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 375,
          "end": 386,
          "elements": [
            {
              "type": "Literal",
              "start": 376,
              "end": 379,
              "raw": "111",
              "value": 111
            },
            {
              "type": "Literal",
              "start": 381,
              "end": 385,
              "raw": "1111",
              "value": 1111
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 413,
      "expression": {
        "type": "AssignmentExpression",
        "start": 388,
        "end": 412,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 388,
          "end": 398,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 389,
              "end": 392,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 401,
          "end": 412,
          "elements": [
            {
              "type": "Literal",
              "start": 402,
              "end": 405,
              "raw": "222",
              "value": 222
            },
            {
              "type": "Literal",
              "start": 407,
              "end": 411,
              "raw": "2222",
              "value": 2222
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 451,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 414,
          "end": 429,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 415,
              "end": 418,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 425,
              "end": 428,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 432,
          "end": 450,
          "elements": [
            {
              "type": "Literal",
              "start": 433,
              "end": 436,
              "raw": "333",
              "value": 333
            },
            {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "raw": "3333",
              "value": 3333
            },
            {
              "type": "Literal",
              "start": 444,
              "end": 449,
              "raw": "33333",
              "value": 33333
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 489,
      "expression": {
        "type": "AssignmentExpression",
        "start": 452,
        "end": 488,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 452,
          "end": 467,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 453,
              "end": 456,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 458,
              "end": 461,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 463,
              "end": 466,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 470,
          "end": 488,
          "elements": [
            {
              "type": "Literal",
              "start": 471,
              "end": 474,
              "raw": "333",
              "value": 333
            },
            {
              "type": "Literal",
              "start": 476,
              "end": 480,
              "raw": "3333",
              "value": 3333
            },
            {
              "type": "Literal",
              "start": 482,
              "end": 487,
              "raw": "33333",
              "value": 33333
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 527,
      "expression": {
        "type": "AssignmentExpression",
        "start": 490,
        "end": 526,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 490,
          "end": 505,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 491,
              "end": 494,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 496,
              "end": 499,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 501,
              "end": 504,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 508,
          "end": 526,
          "elements": [
            {
              "type": "Literal",
              "start": 509,
              "end": 512,
              "raw": "444",
              "value": 444
            },
            {
              "type": "Literal",
              "start": 514,
              "end": 518,
              "raw": "4444",
              "value": 4444
            },
            {
              "type": "Literal",
              "start": 520,
              "end": 525,
              "raw": "44444",
              "value": 44444
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 578,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 549,
            "end": 563,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 551,
                "end": 555,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 555,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 555,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 557,
                "end": 561,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 561,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 561,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 566,
            "end": 578,
            "properties": [
              {
                "type": "Property",
                "start": 568,
                "end": 576,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 572,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 574,
                  "end": 576,
                  "raw": "10",
                  "value": 10
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 580,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 630,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 584,
            "end": 604,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 586,
                "end": 590,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 590,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 590,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 592,
                "end": 602,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 596,
                  "decorators": [],
                  "name": "bar2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 602,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 607,
            "end": 630,
            "properties": [
              {
                "type": "Property",
                "start": 609,
                "end": 617,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 613,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 615,
                  "end": 617,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 619,
                "end": 628,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 623,
                  "decorators": [],
                  "name": "bar2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 625,
                  "end": 628,
                  "raw": "220",
                  "value": 220
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 682,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 636,
            "end": 656,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 638,
                "end": 648,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 642,
                  "decorators": [],
                  "name": "bar3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 648,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 650,
                "end": 654,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 654,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 654,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 659,
            "end": 682,
            "properties": [
              {
                "type": "Property",
                "start": 661,
                "end": 669,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 665,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 667,
                  "end": 669,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 671,
                "end": 680,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 675,
                  "decorators": [],
                  "name": "bar3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 677,
                  "end": 680,
                  "raw": "330",
                  "value": 330
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 684,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 719,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 690,
            "end": 704,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 692,
                "end": 696,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 696,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 696,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 698,
                "end": 702,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 702,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 702,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 707,
            "end": 719,
            "properties": [
              {
                "type": "Property",
                "start": 709,
                "end": 717,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 713,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 715,
                  "end": 717,
                  "raw": "40",
                  "value": 40
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
      "start": 721,
      "end": 774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 773,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 727,
            "end": 747,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 729,
                "end": 733,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "decorators": [],
                  "name": "foo5",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "decorators": [],
                  "name": "foo5",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 735,
                "end": 745,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 739,
                  "decorators": [],
                  "name": "bar5",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 745,
                  "decorators": [],
                  "name": "foo5",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 750,
            "end": 773,
            "properties": [
              {
                "type": "Property",
                "start": 752,
                "end": 760,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 756,
                  "decorators": [],
                  "name": "foo5",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 758,
                  "end": 760,
                  "raw": "50",
                  "value": 50
                }
              },
              {
                "type": "Property",
                "start": 762,
                "end": 771,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 766,
                  "decorators": [],
                  "name": "bar5",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 768,
                  "end": 771,
                  "raw": "550",
                  "value": 550
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
      "start": 775,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 827,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 781,
            "end": 801,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 783,
                "end": 793,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 787,
                  "decorators": [],
                  "name": "bar6",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 793,
                  "decorators": [],
                  "name": "foo6",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 795,
                "end": 799,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "decorators": [],
                  "name": "foo6",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "decorators": [],
                  "name": "foo6",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 804,
            "end": 827,
            "properties": [
              {
                "type": "Property",
                "start": 806,
                "end": 814,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 810,
                  "decorators": [],
                  "name": "foo6",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 812,
                  "end": 814,
                  "raw": "60",
                  "value": 60
                }
              },
              {
                "type": "Property",
                "start": 816,
                "end": 825,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 816,
                  "end": 820,
                  "decorators": [],
                  "name": "bar6",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 822,
                  "end": 825,
                  "raw": "660",
                  "value": 660
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
      "start": 830,
      "end": 862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 834,
          "end": 861,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 834,
            "end": 848,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 835,
                "end": 840,
                "decorators": [],
                "name": "blah1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 842,
                "end": 847,
                "decorators": [],
                "name": "blah1",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 851,
            "end": 861,
            "elements": [
              {
                "type": "Literal",
                "start": 852,
                "end": 855,
                "raw": "111",
                "value": 111
              },
              {
                "type": "Literal",
                "start": 857,
                "end": 860,
                "raw": "222",
                "value": 222
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 863,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 896,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 869,
            "end": 883,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 870,
                "end": 875,
                "decorators": [],
                "name": "blah2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 877,
                "end": 882,
                "decorators": [],
                "name": "blah2",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 886,
            "end": 896,
            "elements": [
              {
                "type": "Literal",
                "start": 887,
                "end": 890,
                "raw": "333",
                "value": 333
              },
              {
                "type": "Literal",
                "start": 892,
                "end": 895,
                "raw": "444",
                "value": 444
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
