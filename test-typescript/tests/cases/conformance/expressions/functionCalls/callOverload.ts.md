callOverload.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "decorators": [],
        "name": "takeTwo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 66,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            }
          }
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 74,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 74,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "decorators": [],
        "name": "withRest",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 115,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 115,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 112,
              "end": 115
            }
          }
        },
        {
          "type": "RestElement",
          "start": 117,
          "end": 136,
          "argument": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "args",
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 131,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 160,
            "decorators": [],
            "name": "n",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 168,
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 167,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 163,
          "end": 165,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 195,
        "arguments": [
          {
            "type": "Literal",
            "start": 184,
            "end": 185,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 193,
            "end": 194,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 183,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 196,
        "end": 215,
        "arguments": [
          {
            "type": "Literal",
            "start": 204,
            "end": 205,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 210,
            "end": 211,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 213,
            "end": 214,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 196,
          "end": 203,
          "decorators": [],
          "name": "takeTwo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 235,
        "arguments": [
          {
            "type": "Literal",
            "start": 225,
            "end": 228,
            "raw": "'a'",
            "value": "a"
          },
          {
            "type": "SpreadElement",
            "start": 230,
            "end": 234,
            "argument": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 224,
          "decorators": [],
          "name": "withRest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 259,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "decorators": [],
          "name": "withRest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 275,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 270,
            "end": 274,
            "argument": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 261,
          "end": 269,
          "decorators": [],
          "name": "withRest",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
