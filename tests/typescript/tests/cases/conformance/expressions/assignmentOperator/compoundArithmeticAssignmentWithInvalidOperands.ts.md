__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
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
      "end": 68,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 67,
        "operator": "*=",
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
          "start": 66,
          "end": 67,
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
      "start": 69,
      "end": 77,
      "expression": {
        "type": "AssignmentExpression",
        "start": 69,
        "end": 76,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 69,
          "end": 71,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
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
      "start": 78,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 88,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 80,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 84,
          "end": 88,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 98,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 97,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 90,
          "end": 92,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 96,
          "end": 97,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 107,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 107,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 101,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 105,
          "end": 107,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 118,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 117,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 114,
          "end": 117,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
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
      "start": 119,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 119,
        "end": 127,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 121,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 125,
          "end": 127,
          "properties": []
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
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 131,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 135,
          "end": 139,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 157,
      "expression": {
        "type": "AssignmentExpression",
        "start": 141,
        "end": 156,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 143,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 156,
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
      "start": 159,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 173,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 173,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
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
      "start": 175,
      "end": 183,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 182,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 177,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
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
      "start": 184,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 191,
        "operator": "*=",
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
          "start": 190,
          "end": 191,
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
      "start": 193,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 203,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 193,
          "end": 195,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 199,
          "end": 203,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 213,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 212,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 207,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 211,
          "end": 212,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 222,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 222,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 214,
          "end": 216,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 220,
          "end": 222,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 233,
      "expression": {
        "type": "AssignmentExpression",
        "start": 223,
        "end": 232,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 223,
          "end": 225,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 229,
          "end": 232,
          "object": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
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
      "start": 234,
      "end": 243,
      "expression": {
        "type": "AssignmentExpression",
        "start": 234,
        "end": 242,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 234,
          "end": 236,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 240,
          "end": 242,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 255,
      "expression": {
        "type": "AssignmentExpression",
        "start": 244,
        "end": 254,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 246,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 250,
          "end": 254,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 272,
      "expression": {
        "type": "AssignmentExpression",
        "start": 256,
        "end": 271,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 256,
          "end": 258,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 262,
          "end": 271,
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
      "start": 274,
      "end": 285,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 282,
                "end": 284,
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
      "start": 286,
      "end": 294,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 293,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 288,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
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
      "start": 295,
      "end": 303,
      "expression": {
        "type": "AssignmentExpression",
        "start": 295,
        "end": 302,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 295,
          "end": 297,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 301,
          "end": 302,
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
      "start": 304,
      "end": 315,
      "expression": {
        "type": "AssignmentExpression",
        "start": 304,
        "end": 314,
        "operator": "*=",
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
          "type": "Literal",
          "start": 310,
          "end": 314,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 316,
        "end": 323,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 316,
          "end": 318,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 323,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 333,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 333,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 327,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 331,
          "end": 333,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 344,
      "expression": {
        "type": "AssignmentExpression",
        "start": 334,
        "end": 343,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 336,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 340,
          "end": 343,
          "object": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
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
      "start": 345,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 345,
        "end": 353,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 345,
          "end": 347,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 351,
          "end": 353,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 366,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 365,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 355,
          "end": 357,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 361,
          "end": 365,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 383,
      "expression": {
        "type": "AssignmentExpression",
        "start": 367,
        "end": 382,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 367,
          "end": 369,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 373,
          "end": 382,
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
      "start": 385,
      "end": 398,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 397,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 397,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 393,
                "end": 397
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
      "start": 399,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 406,
        "operator": "*=",
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
          "end": 406,
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
      "start": 408,
      "end": 416,
      "expression": {
        "type": "AssignmentExpression",
        "start": 408,
        "end": 415,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 408,
          "end": 410,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 414,
          "end": 415,
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
      "start": 417,
      "end": 428,
      "expression": {
        "type": "AssignmentExpression",
        "start": 417,
        "end": 427,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 417,
          "end": 419,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 423,
          "end": 427,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 437,
      "expression": {
        "type": "AssignmentExpression",
        "start": 429,
        "end": 436,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 429,
          "end": 431,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 435,
          "end": 436,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 438,
      "end": 446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 438,
        "end": 446,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 438,
          "end": 440,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 444,
          "end": 446,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 457,
      "expression": {
        "type": "AssignmentExpression",
        "start": 447,
        "end": 456,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 447,
          "end": 449,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 453,
          "end": 456,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
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
      "start": 458,
      "end": 467,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 466,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 458,
          "end": 460,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 464,
          "end": 466,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 468,
        "end": 478,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 468,
          "end": 470,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 474,
          "end": 478,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 496,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 495,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 482,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 486,
          "end": 495,
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
      "start": 498,
      "end": 513,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 512,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 512,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 506,
                "end": 512
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
      "start": 514,
      "end": 522,
      "expression": {
        "type": "AssignmentExpression",
        "start": 514,
        "end": 521,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 514,
          "end": 516,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 520,
          "end": 521,
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
      "start": 523,
      "end": 534,
      "expression": {
        "type": "AssignmentExpression",
        "start": 523,
        "end": 533,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 523,
          "end": 525,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 529,
          "end": 533,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 535,
        "end": 543,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 535,
          "end": 537,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 541,
          "end": 543,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 553,
      "expression": {
        "type": "AssignmentExpression",
        "start": 544,
        "end": 552,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 544,
          "end": 546,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 550,
          "end": 552,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 565,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 564,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 564,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 561,
              "end": 564,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 563,
                "end": 564,
                "typeName": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 564,
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
      "start": 566,
      "end": 574,
      "expression": {
        "type": "AssignmentExpression",
        "start": 566,
        "end": 573,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 566,
          "end": 568,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 572,
          "end": 573,
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
      "start": 575,
      "end": 586,
      "expression": {
        "type": "AssignmentExpression",
        "start": 575,
        "end": 585,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 575,
          "end": 577,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 581,
          "end": 585,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 595,
      "expression": {
        "type": "AssignmentExpression",
        "start": 587,
        "end": 595,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 587,
          "end": 589,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 593,
          "end": 595,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 605,
      "expression": {
        "type": "AssignmentExpression",
        "start": 596,
        "end": 604,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 596,
          "end": 598,
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 602,
          "end": 604,
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
