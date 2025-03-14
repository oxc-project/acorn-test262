arrayLiteral.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 274,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 41,
            "end": 43,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 65,
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 76,
            "end": 79,
            "elements": [
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 89,
            "end": 95,
            "elements": [
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 105,
            "end": 124,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 114,
              "end": 122,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 115,
                  "end": 121
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 143,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 143,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 135,
                "end": 143,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 146,
            "end": 148,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 166,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 166,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 158,
                "end": 166,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 158,
                  "end": 164
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 181,
            "arguments": [
              {
                "type": "Literal",
                "start": 179,
                "end": 180,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 178,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 200,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 200,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 192,
                "end": 200,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 192,
                  "end": 198
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 203,
            "end": 206,
            "elements": [
              {
                "type": "Literal",
                "start": 204,
                "end": 205,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 224,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 224,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 216,
                "end": 224,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 216,
                  "end": 222
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 227,
            "end": 233,
            "elements": [
              {
                "type": "Literal",
                "start": 228,
                "end": 229,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 231,
                "end": 232,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 251,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 251,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 243,
                "end": 251,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 254,
            "end": 273,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 263,
              "end": 271,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 264,
                  "end": 270
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
