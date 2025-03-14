numericLiteralTypes3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1320,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 11,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 9,
        "end": 10,
        "literal": {
          "type": "Literal",
          "start": 9,
          "end": 10,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 12,
      "end": 27,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 21,
        "end": 26,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 21,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSLiteralType",
            "start": 25,
            "end": 26,
            "literal": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "3",
              "value": 3
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 37,
        "end": 46,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 37,
            "end": 38,
            "literal": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSLiteralType",
            "start": 41,
            "end": 42,
            "literal": {
              "type": "Literal",
              "start": 41,
              "end": 42,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSLiteralType",
            "start": 45,
            "end": 46,
            "literal": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "raw": "3",
              "value": 3
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 67,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 57,
        "end": 66,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 57,
            "end": 58,
            "literal": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "TSLiteralType",
            "start": 61,
            "end": 62,
            "literal": {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSLiteralType",
            "start": 65,
            "end": 66,
            "literal": {
              "type": "Literal",
              "start": 65,
              "end": 66,
              "raw": "2",
              "value": 2
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 69,
      "end": 152,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 152,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 117,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 128,
            "expression": {
              "type": "AssignmentExpression",
              "start": 122,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 139,
            "expression": {
              "type": "AssignmentExpression",
              "start": 133,
              "end": 138,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 144,
            "end": 150,
            "expression": {
              "type": "AssignmentExpression",
              "start": 144,
              "end": 149,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 93,
          "end": 97,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 97,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 99,
          "end": 103,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 237,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 202,
            "expression": {
              "type": "AssignmentExpression",
              "start": 196,
              "end": 201,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 213,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 212,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 218,
            "end": 224,
            "expression": {
              "type": "AssignmentExpression",
              "start": 218,
              "end": 223,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 229,
            "end": 235,
            "expression": {
              "type": "AssignmentExpression",
              "start": 229,
              "end": 234,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 165,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 178,
          "end": 182,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 182,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 182,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 184,
          "end": 188,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 188,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 322,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 275,
        "end": 322,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 281,
            "end": 287,
            "expression": {
              "type": "AssignmentExpression",
              "start": 281,
              "end": 286,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 298,
            "expression": {
              "type": "AssignmentExpression",
              "start": 292,
              "end": 297,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 309,
            "expression": {
              "type": "AssignmentExpression",
              "start": 303,
              "end": 308,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 320,
            "expression": {
              "type": "AssignmentExpression",
              "start": 314,
              "end": 319,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 250,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 251,
          "end": 255,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 254,
              "end": 255,
              "typeName": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 257,
          "end": 261,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 261,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 263,
          "end": 267,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 264,
            "end": 267,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 266,
              "end": 267,
              "typeName": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 269,
          "end": 273,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 270,
            "end": 273,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 272,
              "end": 273,
              "typeName": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 324,
      "end": 407,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 360,
        "end": 407,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 366,
            "end": 372,
            "expression": {
              "type": "AssignmentExpression",
              "start": 366,
              "end": 371,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 377,
            "end": 383,
            "expression": {
              "type": "AssignmentExpression",
              "start": 377,
              "end": 382,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 388,
            "end": 394,
            "expression": {
              "type": "AssignmentExpression",
              "start": 388,
              "end": 393,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 388,
                "end": 389,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 399,
            "end": 405,
            "expression": {
              "type": "AssignmentExpression",
              "start": 399,
              "end": 404,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 403,
                "end": 404,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 335,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 336,
          "end": 340,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 337,
            "end": 340,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 339,
              "end": 340,
              "typeName": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 342,
          "end": 346,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 345,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 348,
          "end": 352,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 354,
          "end": 358,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 355,
            "end": 358,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 358,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 409,
      "end": 624,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 624,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 451,
            "end": 457,
            "expression": {
              "type": "AssignmentExpression",
              "start": 451,
              "end": 456,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 455,
                "end": 456,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 462,
            "end": 468,
            "expression": {
              "type": "AssignmentExpression",
              "start": 462,
              "end": 467,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 466,
                "end": 467,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 473,
            "end": 479,
            "expression": {
              "type": "AssignmentExpression",
              "start": 473,
              "end": 478,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 477,
                "end": 478,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 484,
            "end": 490,
            "expression": {
              "type": "AssignmentExpression",
              "start": 484,
              "end": 489,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 488,
                "end": 489,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 495,
            "end": 501,
            "expression": {
              "type": "AssignmentExpression",
              "start": 495,
              "end": 500,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 499,
                "end": 500,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 506,
            "end": 512,
            "expression": {
              "type": "AssignmentExpression",
              "start": 506,
              "end": 511,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 510,
                "end": 511,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 517,
            "end": 523,
            "expression": {
              "type": "AssignmentExpression",
              "start": 517,
              "end": 522,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 517,
                "end": 518,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 521,
                "end": 522,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 534,
            "expression": {
              "type": "AssignmentExpression",
              "start": 528,
              "end": 533,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 539,
            "end": 545,
            "expression": {
              "type": "AssignmentExpression",
              "start": 539,
              "end": 544,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 539,
                "end": 540,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 543,
                "end": 544,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 550,
            "end": 556,
            "expression": {
              "type": "AssignmentExpression",
              "start": 550,
              "end": 555,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 550,
                "end": 551,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 554,
                "end": 555,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 561,
            "end": 567,
            "expression": {
              "type": "AssignmentExpression",
              "start": 561,
              "end": 566,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 565,
                "end": 566,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 572,
            "end": 578,
            "expression": {
              "type": "AssignmentExpression",
              "start": 572,
              "end": 577,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 572,
                "end": 573,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 576,
                "end": 577,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 583,
            "end": 589,
            "expression": {
              "type": "AssignmentExpression",
              "start": 583,
              "end": 588,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 587,
                "end": 588,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 594,
            "end": 600,
            "expression": {
              "type": "AssignmentExpression",
              "start": 594,
              "end": 599,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 598,
                "end": 599,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 605,
            "end": 611,
            "expression": {
              "type": "AssignmentExpression",
              "start": 605,
              "end": 610,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 609,
                "end": 610,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 622,
            "expression": {
              "type": "AssignmentExpression",
              "start": 616,
              "end": 621,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 620,
                "end": 621,
                "raw": "3",
                "value": 3
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 421,
          "end": 425,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 424,
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 431,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 433,
          "end": 437,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 439,
          "end": 443,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 440,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 442,
              "end": 443,
              "typeName": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 626,
      "end": 873,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 662,
        "end": 873,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 668,
            "end": 676,
            "expression": {
              "type": "BinaryExpression",
              "start": 668,
              "end": 675,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 668,
                "end": 669,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 674,
                "end": 675,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 689,
            "expression": {
              "type": "BinaryExpression",
              "start": 681,
              "end": 688,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 681,
                "end": 682,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 687,
                "end": 688,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 702,
            "expression": {
              "type": "BinaryExpression",
              "start": 694,
              "end": 701,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 700,
                "end": 701,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 707,
            "end": 715,
            "expression": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 714,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 707,
                "end": 708,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 713,
                "end": 714,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 728,
            "expression": {
              "type": "BinaryExpression",
              "start": 720,
              "end": 727,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 726,
                "end": 727,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 733,
            "end": 741,
            "expression": {
              "type": "BinaryExpression",
              "start": 733,
              "end": 740,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 733,
                "end": 734,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 739,
                "end": 740,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 746,
            "end": 754,
            "expression": {
              "type": "BinaryExpression",
              "start": 746,
              "end": 753,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 746,
                "end": 747,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 752,
                "end": 753,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 767,
            "expression": {
              "type": "BinaryExpression",
              "start": 759,
              "end": 766,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 759,
                "end": 760,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 765,
                "end": 766,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 772,
            "end": 780,
            "expression": {
              "type": "BinaryExpression",
              "start": 772,
              "end": 779,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 772,
                "end": 773,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 778,
                "end": 779,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 785,
            "end": 793,
            "expression": {
              "type": "BinaryExpression",
              "start": 785,
              "end": 792,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 785,
                "end": 786,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 791,
                "end": 792,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 798,
            "end": 806,
            "expression": {
              "type": "BinaryExpression",
              "start": 798,
              "end": 805,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 798,
                "end": 799,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 804,
                "end": 805,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 811,
            "end": 819,
            "expression": {
              "type": "BinaryExpression",
              "start": 811,
              "end": 818,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 811,
                "end": 812,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 817,
                "end": 818,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 824,
            "end": 832,
            "expression": {
              "type": "BinaryExpression",
              "start": 824,
              "end": 831,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 824,
                "end": 825,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 830,
                "end": 831,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 837,
            "end": 845,
            "expression": {
              "type": "BinaryExpression",
              "start": 837,
              "end": 844,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 837,
                "end": 838,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 843,
                "end": 844,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 850,
            "end": 858,
            "expression": {
              "type": "BinaryExpression",
              "start": 850,
              "end": 857,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 850,
                "end": 851,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 856,
                "end": 857,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 863,
            "end": 871,
            "expression": {
              "type": "BinaryExpression",
              "start": 863,
              "end": 870,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 863,
                "end": 864,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 869,
                "end": 870,
                "raw": "3",
                "value": 3
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 637,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 638,
          "end": 642,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 639,
            "end": 642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 641,
              "end": 642,
              "typeName": {
                "type": "Identifier",
                "start": 641,
                "end": 642,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 644,
          "end": 648,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 645,
            "end": 648,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 647,
              "end": 648,
              "typeName": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 650,
          "end": 654,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 651,
            "end": 654,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 653,
              "end": 654,
              "typeName": {
                "type": "Identifier",
                "start": 653,
                "end": 654,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 656,
          "end": 660,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 657,
            "end": 660,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 659,
              "end": 660,
              "typeName": {
                "type": "Identifier",
                "start": 659,
                "end": 660,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 875,
      "end": 1122,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 911,
        "end": 1122,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 917,
            "end": 925,
            "expression": {
              "type": "BinaryExpression",
              "start": 917,
              "end": 924,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 923,
                "end": 924,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 930,
            "end": 938,
            "expression": {
              "type": "BinaryExpression",
              "start": 930,
              "end": 937,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 936,
                "end": 937,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 943,
            "end": 951,
            "expression": {
              "type": "BinaryExpression",
              "start": 943,
              "end": 950,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 943,
                "end": 944,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 956,
            "end": 964,
            "expression": {
              "type": "BinaryExpression",
              "start": 956,
              "end": 963,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 962,
                "end": 963,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 969,
            "end": 977,
            "expression": {
              "type": "BinaryExpression",
              "start": 969,
              "end": 976,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 982,
            "end": 990,
            "expression": {
              "type": "BinaryExpression",
              "start": 982,
              "end": 989,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 982,
                "end": 983,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 988,
                "end": 989,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 995,
            "end": 1003,
            "expression": {
              "type": "BinaryExpression",
              "start": 995,
              "end": 1002,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 995,
                "end": 996,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1001,
                "end": 1002,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1008,
            "end": 1016,
            "expression": {
              "type": "BinaryExpression",
              "start": 1008,
              "end": 1015,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1008,
                "end": 1009,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1014,
                "end": 1015,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1021,
            "end": 1029,
            "expression": {
              "type": "BinaryExpression",
              "start": 1021,
              "end": 1028,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1021,
                "end": 1022,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1027,
                "end": 1028,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1034,
            "end": 1042,
            "expression": {
              "type": "BinaryExpression",
              "start": 1034,
              "end": 1041,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1047,
            "end": 1055,
            "expression": {
              "type": "BinaryExpression",
              "start": 1047,
              "end": 1054,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1060,
            "end": 1068,
            "expression": {
              "type": "BinaryExpression",
              "start": 1060,
              "end": 1067,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1060,
                "end": 1061,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1066,
                "end": 1067,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1073,
            "end": 1081,
            "expression": {
              "type": "BinaryExpression",
              "start": 1073,
              "end": 1080,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1079,
                "end": 1080,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1086,
            "end": 1094,
            "expression": {
              "type": "BinaryExpression",
              "start": 1086,
              "end": 1093,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1086,
                "end": 1087,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1099,
            "end": 1107,
            "expression": {
              "type": "BinaryExpression",
              "start": 1099,
              "end": 1106,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1099,
                "end": 1100,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1105,
                "end": 1106,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1112,
            "end": 1120,
            "expression": {
              "type": "BinaryExpression",
              "start": 1112,
              "end": 1119,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1112,
                "end": 1113,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1118,
                "end": 1119,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 886,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 887,
          "end": 891,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 888,
            "end": 891,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 890,
              "end": 891,
              "typeName": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 893,
          "end": 897,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 894,
            "end": 897,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 896,
              "end": 897,
              "typeName": {
                "type": "Identifier",
                "start": 896,
                "end": 897,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 899,
          "end": 903,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 900,
            "end": 903,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 902,
              "end": 903,
              "typeName": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 905,
          "end": 909,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 906,
            "end": 909,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 908,
              "end": 909,
              "typeName": {
                "type": "Identifier",
                "start": 908,
                "end": 909,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1124,
      "end": 1320,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1150,
        "end": 1320,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1156,
            "end": 1318,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1177,
                "end": 1192,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1185,
                    "end": 1192,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1182,
                  "end": 1183,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "SwitchCase",
                "start": 1201,
                "end": 1216,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1209,
                    "end": 1216,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1206,
                  "end": 1207,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 1225,
                "end": 1240,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1233,
                    "end": 1240,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1230,
                  "end": 1231,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "SwitchCase",
                "start": 1249,
                "end": 1264,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1257,
                    "end": 1264,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1254,
                  "end": 1255,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "SwitchCase",
                "start": 1273,
                "end": 1288,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1281,
                    "end": 1288,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1278,
                  "end": 1279,
                  "raw": "4",
                  "value": 4
                }
              },
              {
                "type": "SwitchCase",
                "start": 1297,
                "end": 1312,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1305,
                    "end": 1312,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1302,
                  "end": 1303,
                  "raw": "5",
                  "value": 5
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 1164,
              "end": 1165,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1133,
        "end": 1135,
        "decorators": [],
        "name": "f8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1136,
          "end": 1148,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1137,
            "end": 1148,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1139,
              "end": 1148,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1139,
                  "end": 1140,
                  "literal": {
                    "type": "Literal",
                    "start": 1139,
                    "end": 1140,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1143,
                  "end": 1144,
                  "literal": {
                    "type": "Literal",
                    "start": 1143,
                    "end": 1144,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1147,
                  "end": 1148,
                  "literal": {
                    "type": "Literal",
                    "start": 1147,
                    "end": 1148,
                    "raw": "4",
                    "value": 4
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
