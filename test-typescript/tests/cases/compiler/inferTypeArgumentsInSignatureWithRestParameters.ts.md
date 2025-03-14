inferTypeArgumentsInSignatureWithRestParameters.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 38,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 38,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 24,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 24,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 21,
              "end": 24,
              "elementType": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 22,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 26,
          "end": 33,
          "argument": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 65,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 65,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 57,
              "end": 65,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 57,
                "end": 63
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 67,
          "end": 74,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 119,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "h",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 105,
          "decorators": [],
          "name": "nonarray",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 107,
          "end": 114,
          "argument": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 144,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 144,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 141,
              "end": 144,
              "elementType": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 146,
          "end": 157,
          "decorators": [],
          "name": "opt",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 157,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 152,
              "end": 157,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 152,
                "end": 155
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 132,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 171,
            "end": 186,
            "elements": [
              {
                "type": "Literal",
                "start": 172,
                "end": 173,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 175,
                "end": 176,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 178,
                "end": 179,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 181,
                "end": 182,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "raw": "5",
                "value": 5
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 193,
        "arguments": [
          {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 205,
        "arguments": [
          {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 217,
        "arguments": [
          {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "h",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 229,
        "arguments": [
          {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
