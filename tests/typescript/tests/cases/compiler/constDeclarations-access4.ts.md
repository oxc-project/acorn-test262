__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 41,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 39,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 53,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 53,
          "end": 56,
          "object": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 59,
          "end": 60,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 71,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 70,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 70,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 80,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 72,
          "end": 75,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 80,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 91,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 90,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 82,
          "end": 85,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 89,
          "end": 90,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 100,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 92,
          "end": 95,
          "object": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 99,
          "end": 100,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 110,
        "operator": "%=",
        "left": {
          "type": "MemberExpression",
          "start": 102,
          "end": 105,
          "object": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 109,
          "end": 110,
          "value": 6,
          "raw": "6"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 121,
        "operator": "<<=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 115,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 121,
          "value": 7,
          "raw": "7"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 133,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 132,
        "operator": ">>=",
        "left": {
          "type": "MemberExpression",
          "start": 123,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 132,
          "value": 8,
          "raw": "8"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 144,
        "operator": ">>>=",
        "left": {
          "type": "MemberExpression",
          "start": 134,
          "end": 137,
          "object": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 143,
          "end": 144,
          "value": 9,
          "raw": "9"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 156,
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 155,
        "operator": "&=",
        "left": {
          "type": "MemberExpression",
          "start": 146,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 153,
          "end": 155,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 166,
        "operator": "|=",
        "left": {
          "type": "MemberExpression",
          "start": 157,
          "end": 160,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 164,
          "end": 166,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 178,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 177,
        "operator": "^=",
        "left": {
          "type": "MemberExpression",
          "start": 168,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 175,
          "end": 177,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 186,
      "expression": {
        "type": "UpdateExpression",
        "start": 180,
        "end": 185,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 180,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 193,
      "expression": {
        "type": "UpdateExpression",
        "start": 187,
        "end": 192,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 187,
          "end": 190,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "expression": {
        "type": "UpdateExpression",
        "start": 194,
        "end": 199,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 196,
          "end": 199,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 207,
      "expression": {
        "type": "UpdateExpression",
        "start": 201,
        "end": 206,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 203,
          "end": 206,
          "object": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 219,
      "expression": {
        "type": "UpdateExpression",
        "start": 209,
        "end": 218,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 213,
          "end": 216,
          "object": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 221,
          "end": 227,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 223,
            "end": 226,
            "value": "x",
            "raw": "\"x\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 230,
          "end": 231,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 256,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 255,
            "left": {
              "type": "MemberExpression",
              "start": 248,
              "end": 251,
              "object": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 254,
              "end": 255,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 269,
          "end": 278,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 270,
            "end": 278,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 272,
              "end": 278
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 283,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 284,
      "end": 291,
      "expression": {
        "type": "CallExpression",
        "start": 284,
        "end": 290,
        "callee": {
          "type": "Identifier",
          "start": 284,
          "end": 285,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 286,
            "end": 289,
            "object": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 293,
      "end": 305,
      "test": {
        "type": "MemberExpression",
        "start": 297,
        "end": 300,
        "object": {
          "type": "Identifier",
          "start": 297,
          "end": 298,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 299,
          "end": 300,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 302,
        "end": 305,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 311,
      "expression": {
        "type": "MemberExpression",
        "start": 307,
        "end": 310,
        "object": {
          "type": "Identifier",
          "start": 307,
          "end": 308,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 309,
          "end": 310,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 318,
      "expression": {
        "type": "MemberExpression",
        "start": 313,
        "end": 316,
        "object": {
          "type": "Identifier",
          "start": 313,
          "end": 314,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 315,
          "end": 316,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 320,
      "end": 325,
      "expression": {
        "type": "UnaryExpression",
        "start": 320,
        "end": 324,
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "start": 321,
          "end": 324,
          "object": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 331,
      "expression": {
        "type": "UnaryExpression",
        "start": 326,
        "end": 330,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 327,
          "end": 330,
          "object": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 348,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 347,
        "callee": {
          "type": "MemberExpression",
          "start": 333,
          "end": 345,
          "object": {
            "type": "MemberExpression",
            "start": 333,
            "end": 336,
            "object": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 337,
            "end": 345,
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
