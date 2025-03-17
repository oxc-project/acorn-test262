__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 41,
            "end": 43,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 65,
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": 1,
                "raw": "1"
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
      "start": 81,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 2,
                "raw": "2"
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
      "start": 97,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 105,
            "end": 124,
            "callee": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 143,
            "name": "x2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 146,
            "end": 148,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 166,
            "name": "x2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 178,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 179,
                "end": 180,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 200,
            "name": "y2",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
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
      "start": 208,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 224,
            "name": "y2",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 231,
                "end": 232,
                "value": 2,
                "raw": "2"
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
      "start": 235,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 251,
            "name": "y2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 254,
            "end": 273,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
