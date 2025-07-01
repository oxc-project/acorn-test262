__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 33
              },
              "start": 15,
              "end": 33
            },
            "start": 4,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
                  }
                ],
                "start": 52,
                "end": 68
              },
              "start": 50,
              "end": 68
            },
            "start": 39,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 68
        }
      ],
      "declare": false,
      "start": 35,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numEmptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 101,
                    "end": 103
                  }
                ],
                "start": 92,
                "end": 104
              },
              "start": 90,
              "end": 104
            },
            "start": 74,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 104
        }
      ],
      "declare": false,
      "start": 70,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 126,
                    "end": 128
                  }
                ],
                "start": 125,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "start": 110,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 110,
          "end": 129
        }
      ],
      "declare": false,
      "start": 106,
      "end": 130
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                },
                "start": 146,
                "end": 154
              },
              "start": 144,
              "end": 154
            },
            "start": 136,
            "end": 154
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 154
        }
      ],
      "declare": false,
      "start": 132,
      "end": 155
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "emptyObjArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 175,
                  "end": 177
                },
                "start": 175,
                "end": 179
              },
              "start": 173,
              "end": 179
            },
            "start": 160,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 179
        }
      ],
      "declare": false,
      "start": 156,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 202
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 216
        },
        "start": 194,
        "end": 216
      },
      "directive": null,
      "start": 194,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 247
        },
        "start": 218,
        "end": 247
      },
      "directive": null,
      "start": 218,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 262
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 276
        },
        "start": 249,
        "end": 276
      },
      "directive": null,
      "start": 249,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 291
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 305
        },
        "start": 278,
        "end": 305
      },
      "directive": null,
      "start": 278,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 320
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numEmptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 339
        },
        "start": 307,
        "end": 339
      },
      "directive": null,
      "start": 307,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 359
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 373
        },
        "start": 351,
        "end": 373
      },
      "directive": null,
      "start": 351,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 388
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 391,
          "end": 404
        },
        "start": 375,
        "end": 404
      },
      "directive": null,
      "start": 375,
      "end": 405
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 405
}
```
