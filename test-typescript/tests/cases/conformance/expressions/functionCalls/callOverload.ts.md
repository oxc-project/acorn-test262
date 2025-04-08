__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 277,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 26,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 33,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 35,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "name": "takeTwo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 66,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 74,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 74,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 75,
        "end": 81,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 77,
          "end": 81
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 83,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "name": "withRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 115,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 115,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 112,
              "end": 115
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 117,
          "end": 136,
          "argument": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 131,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 131,
                "end": 136,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 132,
                    "end": 135
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 143,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 160,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 160,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 152,
                "end": 160,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 152,
                  "end": 158
                }
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
      "start": 163,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 168,
        "callee": {
          "type": "Identifier",
          "start": 163,
          "end": 165,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 167,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 195,
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 183,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 184,
            "end": 185,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 193,
            "end": 194,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 196,
        "end": 215,
        "callee": {
          "type": "Identifier",
          "start": 196,
          "end": 203,
          "name": "takeTwo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 204,
            "end": 205,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 210,
            "end": 211,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 213,
            "end": 214,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 235,
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 224,
          "name": "withRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 225,
            "end": 228,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "SpreadElement",
            "start": 230,
            "end": 234,
            "argument": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 259,
        "callee": {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "name": "withRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 275,
        "callee": {
          "type": "Identifier",
          "start": 261,
          "end": 269,
          "name": "withRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 270,
            "end": 274,
            "argument": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
