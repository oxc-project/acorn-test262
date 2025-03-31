__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "array0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 13,
            "end": 22,
            "elements": [
              {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "name": "i0",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 54,
      "expression": {
        "type": "AssignmentExpression",
        "start": 35,
        "end": 53,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 35,
          "end": 47,
          "object": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "name": "array0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "UpdateExpression",
            "start": 42,
            "end": 46,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "name": "i0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 52,
          "end": 53,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 69,
            "end": 78,
            "elements": [
              {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 73,
                "end": 74,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 126,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 103,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "UpdateExpression",
            "start": 98,
            "end": 102,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 100,
              "end": 102,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 108,
          "end": 126,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 108,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 114,
              "name": "array1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "UpdateExpression",
              "start": 115,
              "end": 119,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": true,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 125,
            "end": 126,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 139,
            "name": "array2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 142,
            "end": 151,
            "elements": [
              {
                "type": "Literal",
                "start": 143,
                "end": 144,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 149,
                "end": 150,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 198,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 164,
          "end": 176,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "name": "array2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "UpdateExpression",
            "start": 171,
            "end": 175,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 173,
              "end": 175,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 181,
          "end": 198,
          "left": {
            "type": "MemberExpression",
            "start": 181,
            "end": 193,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "name": "array2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "UpdateExpression",
              "start": 188,
              "end": 192,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 190,
                "end": 192,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": true,
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 197,
            "end": 198,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 211,
            "name": "array3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 214,
            "end": 223,
            "elements": [
              {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 218,
                "end": 219,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 221,
                "end": 222,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "name": "j0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 234,
            "end": 235,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 239,
            "name": "j1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 242,
            "end": 243,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 298,
      "expression": {
        "type": "AssignmentExpression",
        "start": 245,
        "end": 297,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 245,
          "end": 257,
          "object": {
            "type": "Identifier",
            "start": 245,
            "end": 251,
            "name": "array3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "UpdateExpression",
            "start": 252,
            "end": 256,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 252,
              "end": 254,
              "name": "j0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 262,
          "end": 297,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 262,
            "end": 274,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 268,
              "name": "array3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "UpdateExpression",
              "start": 269,
              "end": 273,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 269,
                "end": 271,
                "name": "j1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": true,
            "optional": false
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 279,
            "end": 297,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 279,
              "end": 291,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 285,
                "name": "array3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "UpdateExpression",
                "start": 286,
                "end": 290,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 288,
                  "name": "j0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 296,
              "end": 297,
              "value": 1,
              "raw": "1"
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
