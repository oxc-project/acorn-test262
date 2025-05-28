__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
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
      "start": 25,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 29,
          "end": 30,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 39,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 38,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 38,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 47,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 46,
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 46,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 55,
      "expression": {
        "type": "AssignmentExpression",
        "start": 48,
        "end": 54,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 53,
          "end": 54,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 63,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 62,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 61,
          "end": 62,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 71,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 70,
        "operator": "%=",
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 70,
          "value": 6,
          "raw": "6"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 79,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 78,
          "end": 79,
          "value": 7,
          "raw": "7"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 88,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 87,
          "end": 88,
          "value": 8,
          "raw": "8"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 99,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 98,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 97,
          "end": 98,
          "value": 9,
          "raw": "9"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 100,
        "end": 107,
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 105,
          "end": 107,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 109,
        "end": 116,
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 114,
          "end": 116,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 125,
        "operator": "^=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 125,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 132,
      "expression": {
        "type": "UpdateExpression",
        "start": 128,
        "end": 131,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
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
      "start": 133,
      "end": 137,
      "expression": {
        "type": "UpdateExpression",
        "start": 133,
        "end": 136,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
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
      "start": 138,
      "end": 142,
      "expression": {
        "type": "UpdateExpression",
        "start": 138,
        "end": 141,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
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
      "start": 143,
      "end": 147,
      "expression": {
        "type": "UpdateExpression",
        "start": 143,
        "end": 146,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
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
      "start": 149,
      "end": 163,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 157,
            "end": 162,
            "left": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 161,
              "end": 162,
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
      "start": 165,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
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
          "start": 176,
          "end": 185,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 185,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 179,
              "end": 185
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 187,
        "end": 190,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 195,
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 193,
            "end": 194,
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
      "start": 198,
      "end": 208,
      "test": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 205,
        "end": 208,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 212,
      "expression": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 217,
      "expression": {
        "type": "Identifier",
        "start": 214,
        "end": 215,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 222,
      "expression": {
        "type": "UnaryExpression",
        "start": 219,
        "end": 221,
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
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
      "start": 223,
      "end": 226,
      "expression": {
        "type": "UnaryExpression",
        "start": 223,
        "end": 225,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
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
      "start": 228,
      "end": 241,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 240,
        "callee": {
          "type": "MemberExpression",
          "start": 228,
          "end": 238,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 238,
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
