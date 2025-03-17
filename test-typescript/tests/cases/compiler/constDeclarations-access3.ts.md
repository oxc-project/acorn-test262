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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 34,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "object": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 64,
          "end": 65,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 74,
          "end": 75,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 84,
          "end": 85,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 94,
          "end": 95,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 105,
          "value": 6,
          "raw": "6"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 115,
          "end": 116,
          "value": 7,
          "raw": "7"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "value": 8,
          "raw": "8"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 138,
          "end": 139,
          "value": 9,
          "raw": "9"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 148,
          "end": 150,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 161,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 170,
          "end": 172,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 181,
      "expression": {
        "type": "UpdateExpression",
        "start": 175,
        "end": 180,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 175,
          "end": 178,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 188,
      "expression": {
        "type": "UpdateExpression",
        "start": 182,
        "end": 187,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 182,
          "end": 185,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 195,
      "expression": {
        "type": "UpdateExpression",
        "start": 189,
        "end": 194,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 191,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 202,
      "expression": {
        "type": "UpdateExpression",
        "start": 196,
        "end": 201,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 198,
          "end": 201,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 214,
      "expression": {
        "type": "UpdateExpression",
        "start": 204,
        "end": 213,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 208,
          "end": 211,
          "object": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 218,
            "end": 221,
            "value": "x",
            "raw": "\"x\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 225,
          "end": 226,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 243,
            "end": 250,
            "left": {
              "type": "MemberExpression",
              "start": 243,
              "end": 246,
              "object": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 249,
              "end": 250,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 264,
          "end": 273,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 273,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 275,
        "end": 278,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 279,
        "end": 285,
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 281,
            "end": 284,
            "object": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 288,
      "end": 300,
      "test": {
        "type": "MemberExpression",
        "start": 292,
        "end": 295,
        "object": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 297,
        "end": 300,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 306,
      "expression": {
        "type": "MemberExpression",
        "start": 302,
        "end": 305,
        "object": {
          "type": "Identifier",
          "start": 302,
          "end": 303,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 313,
      "expression": {
        "type": "MemberExpression",
        "start": 308,
        "end": 311,
        "object": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 310,
          "end": 311,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 320,
      "expression": {
        "type": "UnaryExpression",
        "start": 315,
        "end": 319,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 316,
          "end": 319,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 326,
      "expression": {
        "type": "UnaryExpression",
        "start": 321,
        "end": 325,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 322,
          "end": 325,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 328,
        "end": 342,
        "callee": {
          "type": "MemberExpression",
          "start": 328,
          "end": 340,
          "object": {
            "type": "MemberExpression",
            "start": 328,
            "end": 331,
            "object": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 340,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
