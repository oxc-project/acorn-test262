__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 649,
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
      "end": 59,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
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
      "start": 60,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 68,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 60,
          "end": 62,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
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
      "start": 70,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 70,
        "end": 78,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 70,
          "end": 72,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
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
      "start": 80,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 91,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 82,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 87,
          "end": 91,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 93,
        "end": 101,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 95,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 100,
          "end": 101,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 112,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 105,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 110,
          "end": 112,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 124,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 123,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 115,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 120,
          "end": 123,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
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
      "start": 125,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 125,
        "end": 134,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 125,
          "end": 127,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 132,
          "end": 134,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 147,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 138,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 143,
          "end": 147,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 165,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 165,
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
      "start": 168,
      "end": 183,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 182,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
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
      "start": 184,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 192,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 186,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
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
      "start": 194,
      "end": 203,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 202,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 196,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
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
      "start": 204,
      "end": 216,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 215,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 204,
          "end": 206,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 211,
          "end": 215,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 226,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 225,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 217,
          "end": 219,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 225,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 236,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 227,
          "end": 229,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 234,
          "end": 236,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 237,
        "end": 247,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 237,
          "end": 239,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 244,
          "end": 247,
          "object": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
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
      "start": 249,
      "end": 259,
      "expression": {
        "type": "AssignmentExpression",
        "start": 249,
        "end": 258,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 249,
          "end": 251,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 256,
          "end": 258,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 272,
      "expression": {
        "type": "AssignmentExpression",
        "start": 260,
        "end": 271,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 260,
          "end": 262,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 267,
          "end": 271,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 273,
        "end": 289,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 273,
          "end": 275,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 280,
          "end": 289,
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
      "start": 292,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 300,
                "end": 302,
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
      "start": 304,
      "end": 313,
      "expression": {
        "type": "AssignmentExpression",
        "start": 304,
        "end": 312,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 304,
          "end": 306,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 311,
          "end": 312,
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
      "start": 314,
      "end": 323,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 322,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 314,
          "end": 316,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
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
      "start": 324,
      "end": 336,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 335,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 324,
          "end": 326,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 331,
          "end": 335,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 346,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 345,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 344,
          "end": 345,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 347,
        "end": 356,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 347,
          "end": 349,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 354,
          "end": 356,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 368,
      "expression": {
        "type": "AssignmentExpression",
        "start": 357,
        "end": 367,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 364,
          "end": 367,
          "object": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 366,
            "end": 367,
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
      "start": 369,
      "end": 379,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 378,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 371,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 376,
          "end": 378,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 392,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 391,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 382,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 387,
          "end": 391,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 410,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 409,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 393,
          "end": 395,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 400,
          "end": 409,
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
      "start": 412,
      "end": 425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 424,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 424,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 420,
                "end": 424
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
      "start": 426,
      "end": 435,
      "expression": {
        "type": "AssignmentExpression",
        "start": 426,
        "end": 434,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 426,
          "end": 428,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
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
      "start": 436,
      "end": 445,
      "expression": {
        "type": "AssignmentExpression",
        "start": 436,
        "end": 444,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 436,
          "end": 438,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 443,
          "end": 444,
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
      "start": 446,
      "end": 458,
      "expression": {
        "type": "AssignmentExpression",
        "start": 446,
        "end": 457,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 446,
          "end": 448,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 453,
          "end": 457,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 459,
        "end": 467,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 459,
          "end": 461,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 466,
          "end": 467,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 478,
      "expression": {
        "type": "AssignmentExpression",
        "start": 469,
        "end": 478,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 469,
          "end": 471,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 476,
          "end": 478,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 479,
      "end": 490,
      "expression": {
        "type": "AssignmentExpression",
        "start": 479,
        "end": 489,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 479,
          "end": 481,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 486,
          "end": 489,
          "object": {
            "type": "Identifier",
            "start": 486,
            "end": 487,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 488,
            "end": 489,
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
      "start": 491,
      "end": 501,
      "expression": {
        "type": "AssignmentExpression",
        "start": 491,
        "end": 500,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 493,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 498,
          "end": 500,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 514,
      "expression": {
        "type": "AssignmentExpression",
        "start": 502,
        "end": 513,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 502,
          "end": 504,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 509,
          "end": 513,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 532,
      "expression": {
        "type": "AssignmentExpression",
        "start": 515,
        "end": 531,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 515,
          "end": 517,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 522,
          "end": 531,
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
      "start": 534,
      "end": 549,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 548,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 540,
              "end": 548,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
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
      "start": 550,
      "end": 559,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 558,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 550,
          "end": 552,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 557,
          "end": 558,
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
      "start": 560,
      "end": 572,
      "expression": {
        "type": "AssignmentExpression",
        "start": 560,
        "end": 571,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 560,
          "end": 562,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 567,
          "end": 571,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 582,
      "expression": {
        "type": "AssignmentExpression",
        "start": 573,
        "end": 582,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 580,
          "end": 582,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 593,
      "expression": {
        "type": "AssignmentExpression",
        "start": 583,
        "end": 592,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 583,
          "end": 585,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 590,
          "end": 592,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 604,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 601,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 603,
                "end": 604,
                "typeName": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
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
      "start": 606,
      "end": 615,
      "expression": {
        "type": "AssignmentExpression",
        "start": 606,
        "end": 614,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 606,
          "end": 608,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 613,
          "end": 614,
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
      "start": 616,
      "end": 628,
      "expression": {
        "type": "AssignmentExpression",
        "start": 616,
        "end": 627,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 623,
          "end": 627,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 629,
      "end": 638,
      "expression": {
        "type": "AssignmentExpression",
        "start": 629,
        "end": 638,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 629,
          "end": 631,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 636,
          "end": 638,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 639,
      "end": 649,
      "expression": {
        "type": "AssignmentExpression",
        "start": 639,
        "end": 648,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 639,
          "end": 641,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 646,
          "end": 648,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
