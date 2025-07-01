__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 19,
                "end": 20
              },
              "typeArguments": null,
              "start": 19,
              "end": 20
            },
            "start": 17,
            "end": 20
          },
          "start": 16,
          "end": 20
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "start": 28,
            "end": 37
          }
        ],
        "start": 22,
        "end": 39
      },
      "expression": false,
      "start": 0,
      "end": 39
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 54,
                    "end": 55
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 57,
                    "end": 58
                  }
                ],
                "start": 53,
                "end": 59
              }
            ],
            "optional": false,
            "start": 49,
            "end": 60
          },
          "definite": false,
          "start": 45,
          "end": 60
        }
      ],
      "declare": false,
      "start": 41,
      "end": 61
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 86,
                    "end": 92
                  },
                  "start": 86,
                  "end": 94
                }
              ],
              "start": 85,
              "end": 95
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 97,
                    "end": 98
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 100,
                    "end": 101
                  }
                ],
                "start": 96,
                "end": 102
              }
            ],
            "optional": false,
            "start": 82,
            "end": 103
          },
          "definite": false,
          "start": 78,
          "end": 103
        }
      ],
      "declare": false,
      "start": 74,
      "end": 104
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
            "name": "ra",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 123
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 129
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 130,
                    "end": 133
                  },
                  "start": 130,
                  "end": 135
                }
              ],
              "start": 129,
              "end": 136
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 138,
                    "end": 139
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 141,
                    "end": 142
                  }
                ],
                "start": 137,
                "end": 143
              }
            ],
            "optional": false,
            "start": 126,
            "end": 144
          },
          "definite": false,
          "start": 121,
          "end": 144
        }
      ],
      "declare": false,
      "start": 117,
      "end": 145
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 168,
                "end": 170
              }
            ],
            "optional": false,
            "start": 164,
            "end": 171
          },
          "definite": false,
          "start": 159,
          "end": 171
        }
      ],
      "declare": false,
      "start": 155,
      "end": 172
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 188
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 194
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 195,
                    "end": 201
                  },
                  "start": 195,
                  "end": 203
                }
              ],
              "start": 194,
              "end": 204
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 205,
                "end": 207
              }
            ],
            "optional": false,
            "start": 191,
            "end": 208
          },
          "definite": false,
          "start": 186,
          "end": 208
        }
      ],
      "declare": false,
      "start": 182,
      "end": 209
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 228
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 236,
                    "end": 237
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 239,
                    "end": 241
                  }
                ],
                "start": 235,
                "end": 242
              }
            ],
            "optional": false,
            "start": 231,
            "end": 243
          },
          "definite": false,
          "start": 226,
          "end": 243
        }
      ],
      "declare": false,
      "start": 222,
      "end": 244
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 265
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 266,
                    "end": 269
                  },
                  "start": 266,
                  "end": 271
                }
              ],
              "start": 265,
              "end": 272
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 274,
                    "end": 275
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 277,
                    "end": 279
                  }
                ],
                "start": 273,
                "end": 280
              }
            ],
            "optional": false,
            "start": 262,
            "end": 281
          },
          "definite": false,
          "start": 257,
          "end": 281
        }
      ],
      "declare": false,
      "start": 253,
      "end": 282
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 304
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 311
                    },
                    "typeArguments": null,
                    "start": 305,
                    "end": 311
                  },
                  "start": 305,
                  "end": 313
                }
              ],
              "start": 304,
              "end": 314
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 316,
                    "end": 317
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 319,
                    "end": 321
                  }
                ],
                "start": 315,
                "end": 322
              }
            ],
            "optional": false,
            "start": 301,
            "end": 323
          },
          "definite": false,
          "start": 296,
          "end": 323
        }
      ],
      "declare": false,
      "start": 292,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 336
}
```
