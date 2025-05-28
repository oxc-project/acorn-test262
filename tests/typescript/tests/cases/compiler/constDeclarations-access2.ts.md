__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 29,
      "expression": {
        "type": "AssignmentExpression",
        "start": 23,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 27,
          "end": 28,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 37,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 36,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 36,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 45,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 44,
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 43,
          "end": 44,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 53,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 52,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 52,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 60,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 59,
          "end": 60,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 68,
        "operator": "%=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 67,
          "end": 68,
          "value": 6,
          "raw": "6"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 70,
        "end": 77,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 76,
          "end": 77,
          "value": 7,
          "raw": "7"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 86,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 85,
          "end": 86,
          "value": 8,
          "raw": "8"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 97,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 96,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 95,
          "end": 96,
          "value": 9,
          "raw": "9"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 106,
      "expression": {
        "type": "AssignmentExpression",
        "start": 98,
        "end": 105,
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 103,
          "end": 105,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 115,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 114,
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 112,
          "end": 114,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 124,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 123,
        "operator": "^=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 121,
          "end": 123,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 130,
      "expression": {
        "type": "UpdateExpression",
        "start": 126,
        "end": 129,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 135,
      "expression": {
        "type": "UpdateExpression",
        "start": 131,
        "end": 134,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 140,
      "expression": {
        "type": "UpdateExpression",
        "start": 136,
        "end": 139,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 145,
      "expression": {
        "type": "UpdateExpression",
        "start": 141,
        "end": 144,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 155,
      "expression": {
        "type": "UpdateExpression",
        "start": 147,
        "end": 154,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 177,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 171,
            "end": 176,
            "left": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 175,
              "end": 176,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 190,
          "end": 199,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 199,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 193,
              "end": 199
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 204,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 205,
        "end": 209,
        "callee": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 212,
      "end": 222,
      "test": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 219,
        "end": 222,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 226,
      "expression": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 231,
      "expression": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 236,
      "expression": {
        "type": "UnaryExpression",
        "start": 233,
        "end": 235,
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 240,
      "expression": {
        "type": "UnaryExpression",
        "start": 237,
        "end": 239,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 255,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 254,
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 252,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 252,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
