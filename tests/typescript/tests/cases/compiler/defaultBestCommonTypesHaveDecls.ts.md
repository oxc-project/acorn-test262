__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 10,
                "end": 12
              },
              "start": 8,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 18
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 19,
          "end": 25
        },
        "optional": false,
        "computed": false,
        "start": 14,
        "end": 25
      },
      "directive": null,
      "start": 14,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 44
                },
                "typeArguments": null,
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "start": 32,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 44
        }
      ],
      "declare": false,
      "start": 28,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 50
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 57
        },
        "optional": false,
        "computed": false,
        "start": 46,
        "end": 57
      },
      "directive": null,
      "start": 46,
      "end": 58
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "concat",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "typeArguments": null,
              "start": 82,
              "end": 83
            },
            "start": 80,
            "end": 83
          },
          "start": 79,
          "end": 83
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "typeArguments": null,
              "start": 88,
              "end": 89
            },
            "start": 86,
            "end": 89
          },
          "start": 85,
          "end": 89
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "typeArguments": null,
          "start": 92,
          "end": 93
        },
        "start": 90,
        "end": 93
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 103,
              "end": 107
            },
            "start": 96,
            "end": 108
          }
        ],
        "start": 94,
        "end": 110
      },
      "expression": false,
      "start": 60,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 121
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 131,
                "end": 132
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 134,
                "end": 136
              }
            ],
            "optional": false,
            "start": 124,
            "end": 137
          },
          "definite": false,
          "start": 115,
          "end": 137
        }
      ],
      "declare": false,
      "start": 111,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementCount",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 164
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 173
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 180
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 180
          },
          "definite": false,
          "start": 152,
          "end": 180
        }
      ],
      "declare": false,
      "start": 148,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "concat2",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 201,
            "end": 202
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 205
          }
        ],
        "start": 200,
        "end": 206
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "typeArguments": null,
              "start": 210,
              "end": 211
            },
            "start": 208,
            "end": 211
          },
          "start": 207,
          "end": 211
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "typeArguments": null,
              "start": 216,
              "end": 217
            },
            "start": 214,
            "end": 217
          },
          "start": 213,
          "end": 217
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 228,
              "end": 232
            },
            "start": 221,
            "end": 233
          }
        ],
        "start": 219,
        "end": 235
      },
      "expression": false,
      "start": 184,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat2",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 258,
                "end": 259
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 261,
                "end": 263
              }
            ],
            "optional": false,
            "start": 250,
            "end": 264
          },
          "definite": false,
          "start": 240,
          "end": 264
        }
      ],
      "declare": false,
      "start": 236,
      "end": 265
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementCount2",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 316
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 325
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 332
            },
            "optional": false,
            "computed": false,
            "start": 319,
            "end": 332
          },
          "definite": false,
          "start": 303,
          "end": 332
        }
      ],
      "declare": false,
      "start": 299,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 335
}
```
