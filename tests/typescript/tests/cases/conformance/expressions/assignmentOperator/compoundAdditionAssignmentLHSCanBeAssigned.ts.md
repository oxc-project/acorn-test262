__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 498,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 15,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 27,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 36,
                "end": 40
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 55,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 54,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 64,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 63,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 58,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 73,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 72,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 67,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 84,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 76,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 80,
          "end": 84,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 93,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 88,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 93,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 103,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 97,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 103,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 115,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 114,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 111,
          "end": 114,
          "object": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "a",
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
      "start": 116,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 124,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 118,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 122,
          "end": 124,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 126,
        "end": 136,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 126,
          "end": 128,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 132,
          "end": 136,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 153,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 140,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 144,
          "end": 153,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 172,
        "end": 179,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 174,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 189,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 188,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 183,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 201,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 200,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 190,
          "end": 192,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 196,
          "end": 200,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 209,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 202,
          "end": 204,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 208,
          "end": 209,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 211,
        "end": 219,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 211,
          "end": 213,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 217,
          "end": 219,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 230,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 221,
          "end": 223,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 227,
          "end": 230,
          "object": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "a",
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
      "start": 232,
      "end": 241,
      "expression": {
        "type": "AssignmentExpression",
        "start": 232,
        "end": 240,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 232,
          "end": 234,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 238,
          "end": 240,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 242,
        "end": 252,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 252,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 270,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 269,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 254,
          "end": 256,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 260,
          "end": 269,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 287,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 286,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 296,
      "expression": {
        "type": "AssignmentExpression",
        "start": 288,
        "end": 295,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 288,
          "end": 290,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 305,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 304,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 297,
          "end": 299,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 303,
          "end": 304,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 315,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 306,
          "end": 308,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 312,
          "end": 315,
          "object": {
            "type": "Identifier",
            "start": 312,
            "end": 313,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "decorators": [],
            "name": "a",
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
      "start": 317,
      "end": 328,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 327,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 317,
          "end": 319,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 327,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 329,
      "end": 345,
      "expression": {
        "type": "AssignmentExpression",
        "start": 329,
        "end": 344,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 329,
          "end": 331,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 335,
          "end": 344,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 357,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 356,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 366,
      "expression": {
        "type": "AssignmentExpression",
        "start": 358,
        "end": 365,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 358,
          "end": 360,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 364,
          "end": 365,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 375,
      "expression": {
        "type": "AssignmentExpression",
        "start": 367,
        "end": 374,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 367,
          "end": 369,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 373,
          "end": 374,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 386,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 385,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 378,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 382,
          "end": 385,
          "object": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "decorators": [],
            "name": "a",
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
      "start": 387,
      "end": 398,
      "expression": {
        "type": "AssignmentExpression",
        "start": 387,
        "end": 397,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 389,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 393,
          "end": 397,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 415,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 414,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 399,
          "end": 401,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 405,
          "end": 414,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 433,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 432,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 432,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 425,
                "end": 432
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 442,
      "expression": {
        "type": "AssignmentExpression",
        "start": 434,
        "end": 441,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 434,
          "end": 436,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 454,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 452,
                "end": 454,
                "members": []
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 464,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 463,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 456,
          "end": 458,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 474,
      "expression": {
        "type": "AssignmentExpression",
        "start": 465,
        "end": 473,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 465,
          "end": 467,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 471,
          "end": 473,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 489,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 488,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 488,
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 482,
              "end": 488,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 484,
                "end": 488
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 498,
      "expression": {
        "type": "AssignmentExpression",
        "start": 490,
        "end": 497,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 490,
          "end": 492,
          "decorators": [],
          "name": "x7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 496,
          "end": 497,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
