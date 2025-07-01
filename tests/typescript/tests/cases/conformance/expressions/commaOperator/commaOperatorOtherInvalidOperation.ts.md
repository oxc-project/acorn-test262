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
        "start": 92,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 99,
              "end": 105
            },
            "start": 97,
            "end": 105
          },
          "start": 96,
          "end": 105
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 110,
              "end": 116
            },
            "start": 108,
            "end": 116
          },
          "start": 107,
          "end": 116
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                }
              ],
              "start": 131,
              "end": 135
            },
            "start": 124,
            "end": 136
          }
        ],
        "start": 118,
        "end": 138
      },
      "expression": false,
      "start": 83,
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
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "start": 143,
            "end": 165
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 172,
                "end": 173
              },
              {
                "type": "Literal",
                "value": "123",
                "raw": "\"123\"",
                "start": 175,
                "end": 180
              }
            ],
            "optional": false,
            "start": 168,
            "end": 181
          },
          "definite": false,
          "start": 143,
          "end": 181
        }
      ],
      "declare": false,
      "start": 139,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 227
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 228,
            "end": 230
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 232,
            "end": 234
          }
        ],
        "start": 227,
        "end": 235
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 253
                      },
                      "typeArguments": null,
                      "start": 251,
                      "end": 253
                    },
                    "start": 249,
                    "end": 253
                  },
                  "start": 248,
                  "end": 253
                },
                "init": null,
                "definite": false,
                "start": 248,
                "end": 253
              }
            ],
            "declare": false,
            "start": 244,
            "end": 254
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 268
                      },
                      "typeArguments": null,
                      "start": 266,
                      "end": 268
                    },
                    "start": 264,
                    "end": 268
                  },
                  "start": 263,
                  "end": 268
                },
                "init": null,
                "definite": false,
                "start": 263,
                "end": 268
              }
            ],
            "declare": false,
            "start": 259,
            "end": 269
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 288
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 288
                    },
                    "start": 284,
                    "end": 288
                  },
                  "start": 278,
                  "end": 288
                },
                "init": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 296
                    }
                  ],
                  "start": 292,
                  "end": 296
                },
                "definite": false,
                "start": 278,
                "end": 297
              }
            ],
            "declare": false,
            "start": 274,
            "end": 298
          }
        ],
        "start": 238,
        "end": 313
      },
      "expression": false,
      "start": 214,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 313
}
```
