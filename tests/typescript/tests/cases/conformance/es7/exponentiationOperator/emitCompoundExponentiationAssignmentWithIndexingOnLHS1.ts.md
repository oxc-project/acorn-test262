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
            "name": "array0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 14,
                "end": 15
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 17,
                "end": 18
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 20,
                "end": 21
              }
            ],
            "start": 13,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "i0",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 32,
            "end": 33
          },
          "definite": false,
          "start": 27,
          "end": 33
        }
      ],
      "declare": false,
      "start": 23,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array0",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 41
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i0",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": true,
          "start": 35,
          "end": 47
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 52,
          "end": 53
        },
        "start": 35,
        "end": 53
      },
      "directive": null,
      "start": 35,
      "end": 54
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 70,
                "end": 71
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 73,
                "end": 74
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 76,
                "end": 77
              }
            ],
            "start": 69,
            "end": 78
          },
          "definite": false,
          "start": 60,
          "end": 78
        }
      ],
      "declare": false,
      "start": 56,
      "end": 78
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 88,
            "end": 89
          },
          "definite": false,
          "start": 83,
          "end": 89
        }
      ],
      "declare": false,
      "start": 79,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 102
            },
            "start": 98,
            "end": 102
          },
          "optional": false,
          "computed": true,
          "start": 91,
          "end": 103
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 114
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "start": 115,
              "end": 119
            },
            "optional": false,
            "computed": true,
            "start": 108,
            "end": 120
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 125,
            "end": 126
          },
          "start": 108,
          "end": 126
        },
        "start": 91,
        "end": 126
      },
      "directive": null,
      "start": 91,
      "end": 127
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
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 139
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 143,
                "end": 144
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 146,
                "end": 147
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 149,
                "end": 150
              }
            ],
            "start": 142,
            "end": 151
          },
          "definite": false,
          "start": 133,
          "end": 151
        }
      ],
      "declare": false,
      "start": 129,
      "end": 151
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 158
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "definite": false,
          "start": 156,
          "end": 162
        }
      ],
      "declare": false,
      "start": 152,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 170
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 175
            },
            "start": 171,
            "end": 175
          },
          "optional": false,
          "computed": true,
          "start": 164,
          "end": 176
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array2",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              },
              "start": 188,
              "end": 192
            },
            "optional": false,
            "computed": true,
            "start": 181,
            "end": 193
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 197,
            "end": 198
          },
          "start": 181,
          "end": 198
        },
        "start": 164,
        "end": 198
      },
      "directive": null,
      "start": 164,
      "end": 199
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
            "name": "array3",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 211
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 215,
                "end": 216
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 218,
                "end": 219
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 221,
                "end": 222
              }
            ],
            "start": 214,
            "end": 223
          },
          "definite": false,
          "start": 205,
          "end": 223
        }
      ],
      "declare": false,
      "start": 201,
      "end": 224
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
            "name": "j0",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 231
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 234,
            "end": 235
          },
          "definite": false,
          "start": 229,
          "end": 235
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j1",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 242,
            "end": 243
          },
          "definite": false,
          "start": 237,
          "end": 243
        }
      ],
      "declare": false,
      "start": 225,
      "end": 244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array3",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 251
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "j0",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 254
            },
            "start": 252,
            "end": 256
          },
          "optional": false,
          "computed": true,
          "start": 245,
          "end": 257
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array3",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 268
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j1",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 271
              },
              "start": 269,
              "end": 273
            },
            "optional": false,
            "computed": true,
            "start": 262,
            "end": 274
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array3",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 285
              },
              "property": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 288
                },
                "start": 286,
                "end": 290
              },
              "optional": false,
              "computed": true,
              "start": 279,
              "end": 291
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 296,
              "end": 297
            },
            "start": 279,
            "end": 297
          },
          "start": 262,
          "end": 297
        },
        "start": 245,
        "end": 297
      },
      "directive": null,
      "start": 245,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 298
}
```
