__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
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
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 28,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 24,
                "end": 28
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
      "start": 31,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 46,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
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
      "start": 48,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 48,
        "end": 55,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 48,
          "end": 50,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
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
      "start": 57,
      "end": 68,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 67,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 63,
          "end": 67,
          "value": true,
          "raw": "true"
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
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 69,
          "end": 71,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 75,
          "end": 76,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 88,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 87,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 80,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 84,
          "end": 87,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
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
      "start": 89,
      "end": 98,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 97,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 91,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 95,
          "end": 97,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 109,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 101,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 105,
          "end": 109,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 111,
        "end": 126,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 111,
          "end": 113,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 117,
          "end": 126,
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
      "start": 129,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 139,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 137,
                "end": 139,
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
      "start": 141,
      "end": 149,
      "expression": {
        "type": "AssignmentExpression",
        "start": 141,
        "end": 148,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 143,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
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
      "start": 150,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 160,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 150,
          "end": 152,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 160,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 170,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 169,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 168,
          "end": 169,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 171,
        "end": 180,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 171,
          "end": 173,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 177,
          "end": 180,
          "object": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
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
      "start": 182,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 182,
        "end": 190,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 182,
          "end": 184,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 188,
          "end": 190,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 203,
      "expression": {
        "type": "AssignmentExpression",
        "start": 192,
        "end": 202,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 198,
          "end": 202,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 219,
        "operator": "+=",
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
          "type": "Identifier",
          "start": 210,
          "end": 219,
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
      "start": 222,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 234,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 234,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 230,
                "end": 234
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
      "start": 236,
      "end": 244,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 243,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 236,
          "end": 238,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 242,
          "end": 243,
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
      "start": 245,
      "end": 256,
      "expression": {
        "type": "AssignmentExpression",
        "start": 245,
        "end": 255,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 245,
          "end": 247,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 251,
          "end": 255,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 265,
      "expression": {
        "type": "AssignmentExpression",
        "start": 257,
        "end": 264,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 263,
          "end": 264,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 276,
      "expression": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 275,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 266,
          "end": 268,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 272,
          "end": 275,
          "object": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
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
      "start": 277,
      "end": 286,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 285,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 279,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 283,
          "end": 285,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 298,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 297,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 287,
          "end": 289,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 293,
          "end": 297,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 315,
      "expression": {
        "type": "AssignmentExpression",
        "start": 299,
        "end": 314,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 299,
          "end": 301,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 305,
          "end": 314,
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
      "start": 317,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 331,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 331,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 325,
                "end": 331
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
      "start": 333,
      "end": 341,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 340,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 335,
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
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
      "start": 342,
      "end": 353,
      "expression": {
        "type": "AssignmentExpression",
        "start": 342,
        "end": 352,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 342,
          "end": 344,
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 348,
          "end": 352,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 354,
      "end": 363,
      "expression": {
        "type": "AssignmentExpression",
        "start": 354,
        "end": 362,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 354,
          "end": 356,
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 360,
          "end": 362,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 374,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 374,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 374,
                "typeName": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
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
      "start": 376,
      "end": 384,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 383,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 378,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 382,
          "end": 383,
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
      "start": 385,
      "end": 396,
      "expression": {
        "type": "AssignmentExpression",
        "start": 385,
        "end": 395,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 385,
          "end": 387,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 391,
          "end": 395,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 397,
      "end": 406,
      "expression": {
        "type": "AssignmentExpression",
        "start": 397,
        "end": 405,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 397,
          "end": 399,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 403,
          "end": 405,
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
