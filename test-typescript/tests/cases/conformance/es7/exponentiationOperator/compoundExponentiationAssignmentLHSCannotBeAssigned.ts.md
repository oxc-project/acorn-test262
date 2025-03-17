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
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 9,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 27,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 36,
                "end": 40
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 120,
          "end": 123,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "a",
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 165,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 182,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 244,
          "end": 247,
          "object": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "name": "a",
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "name": "x3",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 311,
          "end": 312,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 364,
          "end": 367,
          "object": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 366,
            "end": 367,
            "name": "a",
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 400,
          "end": 409,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 424,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 424,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 420,
                "end": 424
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 443,
          "end": 444,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 486,
          "end": 489,
          "object": {
            "type": "Identifier",
            "start": 486,
            "end": 487,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 488,
            "end": 489,
            "name": "a",
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 522,
          "end": 531,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 534,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 548,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 540,
              "end": 548,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 557,
          "end": 558,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 604,
            "name": "x6",
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
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 613,
          "end": 614,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
