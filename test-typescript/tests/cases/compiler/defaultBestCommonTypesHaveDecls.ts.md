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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "obj1",
            "optional": false,
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
      "start": 14,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 14,
        "end": 25,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 44,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 44,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 46,
      "end": 58,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 46,
        "end": 57,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 110,
      "async": false,
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
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 75,
        "decorators": [],
        "name": "concat",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 83,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 82,
              "end": 83,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 85,
          "end": 89,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 124,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 131,
                "end": 132,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 134,
                "end": 136,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 164,
            "decorators": [],
            "name": "elementCount",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 180,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 173,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 180,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 235,
      "async": false,
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
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 200,
        "decorators": [],
        "name": "concat2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 207,
          "end": 211,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 211,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 200,
        "end": 206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 202,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 205,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 247,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 264,
            "arguments": [
              {
                "type": "Literal",
                "start": 258,
                "end": 259,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 261,
                "end": 263,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 257,
              "decorators": [],
              "name": "concat2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 316,
            "decorators": [],
            "name": "elementCount2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 332,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 325,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 326,
              "end": 332,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
