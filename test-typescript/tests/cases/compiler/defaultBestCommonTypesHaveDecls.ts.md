__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 12,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10,
                "end": 12,
                "members": []
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
      "start": 14,
      "end": 26,
      "expression": {
        "type": "MemberExpression",
        "start": 14,
        "end": 25,
        "object": {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 44,
            "name": "obj2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 44,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 46,
      "end": 58,
      "expression": {
        "type": "MemberExpression",
        "start": 46,
        "end": 57,
        "object": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 75,
        "name": "concat",
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
          "start": 79,
          "end": 83,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 82,
              "end": 83,
              "typeName": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 85,
          "end": 89,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 108,
            "argument": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 124,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
              "name": "concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 131,
                "end": 132,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 134,
                "end": 136,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
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
      "start": 148,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 164,
            "name": "elementCount",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 180,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 173,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 180,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 200,
        "name": "concat2",
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
          "start": 207,
          "end": 211,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 211,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 235,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 221,
            "end": 233,
            "argument": {
              "type": "Literal",
              "start": 228,
              "end": 232,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 200,
        "end": 206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 202,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 205,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 247,
            "name": "result2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 257,
              "name": "concat2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 258,
                "end": 259,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 261,
                "end": 263,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
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
      "start": 299,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 316,
            "name": "elementCount2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 332,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 325,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 326,
              "end": 332,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
