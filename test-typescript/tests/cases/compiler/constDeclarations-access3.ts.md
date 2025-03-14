__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 34,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "raw": "0",
                    "value": 0
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 48,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 48,
          "end": 51,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 66,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 65,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 57,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 64,
          "end": 65,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 76,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 75,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 67,
          "end": 70,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 74,
          "end": 75,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 85,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 84,
          "end": 85,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 87,
        "end": 95,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 87,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 94,
          "end": 95,
          "raw": "5",
          "value": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 106,
      "expression": {
        "type": "AssignmentExpression",
        "start": 97,
        "end": 105,
        "operator": "%=",
        "left": {
          "type": "MemberExpression",
          "start": 97,
          "end": 100,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 105,
          "raw": "6",
          "value": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 116,
        "operator": "<<=",
        "left": {
          "type": "MemberExpression",
          "start": 107,
          "end": 110,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 115,
          "end": 116,
          "raw": "7",
          "value": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 127,
        "operator": ">>=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 121,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "raw": "8",
          "value": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 139,
        "operator": ">>>=",
        "left": {
          "type": "MemberExpression",
          "start": 129,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 138,
          "end": 139,
          "raw": "9",
          "value": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 141,
        "end": 150,
        "operator": "&=",
        "left": {
          "type": "MemberExpression",
          "start": 141,
          "end": 144,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 148,
          "end": 150,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 161,
        "operator": "|=",
        "left": {
          "type": "MemberExpression",
          "start": 152,
          "end": 155,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 161,
          "raw": "11",
          "value": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 173,
      "expression": {
        "type": "AssignmentExpression",
        "start": 163,
        "end": 172,
        "operator": "^=",
        "left": {
          "type": "MemberExpression",
          "start": 163,
          "end": 166,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 170,
          "end": 172,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 181,
      "expression": {
        "type": "UpdateExpression",
        "start": 175,
        "end": 180,
        "argument": {
          "type": "MemberExpression",
          "start": 175,
          "end": 178,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 188,
      "expression": {
        "type": "UpdateExpression",
        "start": 182,
        "end": 187,
        "argument": {
          "type": "MemberExpression",
          "start": 182,
          "end": 185,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "--",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 195,
      "expression": {
        "type": "UpdateExpression",
        "start": 189,
        "end": 194,
        "argument": {
          "type": "MemberExpression",
          "start": 191,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 202,
      "expression": {
        "type": "UpdateExpression",
        "start": 196,
        "end": 201,
        "argument": {
          "type": "MemberExpression",
          "start": 198,
          "end": 201,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "--",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 214,
      "expression": {
        "type": "UpdateExpression",
        "start": 204,
        "end": 213,
        "argument": {
          "type": "MemberExpression",
          "start": 208,
          "end": 211,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 226,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 216,
          "end": 222,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 218,
            "end": 221,
            "raw": "\"x\"",
            "value": "x"
          }
        },
        "right": {
          "type": "Literal",
          "start": 225,
          "end": 226,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 243,
            "end": 250,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 243,
              "end": 246,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 249,
              "end": 250,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 278,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 275,
        "end": 278,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 264,
          "end": 273,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 273,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 279,
        "end": 285,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 281,
            "end": 284,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 288,
      "end": 300,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 297,
        "end": 300,
        "body": []
      },
      "test": {
        "type": "MemberExpression",
        "start": 292,
        "end": 295,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 306,
      "expression": {
        "type": "MemberExpression",
        "start": 302,
        "end": 305,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 302,
          "end": 303,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 313,
      "expression": {
        "type": "MemberExpression",
        "start": 308,
        "end": 311,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 310,
          "end": 311,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 320,
      "expression": {
        "type": "UnaryExpression",
        "start": 315,
        "end": 319,
        "argument": {
          "type": "MemberExpression",
          "start": 316,
          "end": 319,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 326,
      "expression": {
        "type": "UnaryExpression",
        "start": 321,
        "end": 325,
        "argument": {
          "type": "MemberExpression",
          "start": 322,
          "end": 325,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 328,
        "end": 342,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 328,
          "end": 340,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 328,
            "end": 331,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 340,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
