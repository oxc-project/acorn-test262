__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fee",
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
                        "start": 31,
                        "end": 32
                      },
                      "typeArguments": null,
                      "start": 31,
                      "end": 32
                    },
                    "start": 29,
                    "end": 32
                  },
                  "start": 28,
                  "end": 32
                },
                "init": null,
                "definite": false,
                "start": 28,
                "end": 32
              }
            ],
            "declare": false,
            "start": 24,
            "end": 33
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 44
              },
              "optional": false,
              "computed": false,
              "start": 38,
              "end": 44
            },
            "directive": null,
            "start": 38,
            "end": 45
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 69
            },
            "directive": null,
            "start": 59,
            "end": 70
          }
        ],
        "start": 18,
        "end": 78
      },
      "expression": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fee2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 93
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
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 104,
              "end": 107
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 107
          }
        ],
        "start": 93,
        "end": 108
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
                        "start": 124,
                        "end": 125
                      },
                      "typeArguments": null,
                      "start": 124,
                      "end": 125
                    },
                    "start": 122,
                    "end": 125
                  },
                  "start": 121,
                  "end": 125
                },
                "init": null,
                "definite": false,
                "start": 121,
                "end": 125
              }
            ],
            "declare": false,
            "start": 117,
            "end": 126
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 137
            },
            "directive": null,
            "start": 131,
            "end": 138
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 159
              },
              "optional": false,
              "computed": false,
              "start": 149,
              "end": 159
            },
            "directive": null,
            "start": 149,
            "end": 160
          }
        ],
        "start": 111,
        "end": 168
      },
      "expression": false,
      "start": 80,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 191,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 194
          }
        ],
        "start": 180,
        "end": 195
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
                "start": 199,
                "end": 200
              },
              "typeArguments": null,
              "start": 199,
              "end": 200
            },
            "start": 197,
            "end": 200
          },
          "start": 196,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 218
              },
              "optional": false,
              "computed": false,
              "start": 208,
              "end": 218
            },
            "directive": null,
            "start": 208,
            "end": 219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 224,
              "end": 227
            },
            "directive": null,
            "start": 224,
            "end": 228
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "typeArguments": null,
              "arguments": [],
              "start": 233,
              "end": 240
            },
            "directive": null,
            "start": 233,
            "end": 241
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "property": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 248,
                "end": 251
              },
              "optional": false,
              "computed": true,
              "start": 246,
              "end": 252
            },
            "directive": null,
            "start": 246,
            "end": 253
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 259
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 260,
                "end": 267
              },
              "optional": false,
              "computed": true,
              "start": 258,
              "end": 268
            },
            "directive": null,
            "start": 258,
            "end": 269
          }
        ],
        "start": 202,
        "end": 271
      },
      "expression": false,
      "start": 170,
      "end": 271
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 309
      },
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
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 311
          }
        ],
        "start": 309,
        "end": 312
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 316
            },
            "typeArguments": null,
            "start": 315,
            "end": 316
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 333
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tree",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 340
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 342
                            },
                            "typeArguments": null,
                            "start": 341,
                            "end": 342
                          }
                        ],
                        "start": 340,
                        "end": 343
                      },
                      "start": 336,
                      "end": 343
                    },
                    "start": 336,
                    "end": 345
                  },
                  "start": 334,
                  "end": 345
                },
                "accessibility": null,
                "static": false,
                "start": 325,
                "end": 346
              }
            ],
            "start": 319,
            "end": 348
          }
        ],
        "start": 315,
        "end": 348
      },
      "declare": false,
      "start": 300,
      "end": 348
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 363
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "displayTree1",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 396
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 397,
                      "end": 398
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tree",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 411
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 412,
                            "end": 415
                          }
                        ],
                        "start": 411,
                        "end": 416
                      },
                      "start": 407,
                      "end": 416
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 397,
                    "end": 416
                  }
                ],
                "start": 396,
                "end": 417
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tree",
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
                        "start": 424,
                        "end": 425
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 425
                    },
                    "start": 422,
                    "end": 425
                  },
                  "start": 418,
                  "end": 425
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tree",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 507
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 516
                      },
                      "optional": false,
                      "computed": false,
                      "start": 503,
                      "end": 516
                    },
                    "directive": null,
                    "start": 503,
                    "end": 517
                  }
                ],
                "start": 427,
                "end": 523
              },
              "expression": false,
              "start": 396,
              "end": 523
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 370,
            "end": 523
          }
        ],
        "start": 364,
        "end": 525
      },
      "abstract": false,
      "declare": false,
      "start": 350,
      "end": 525
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 525
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "fee",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 80,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "fee2",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 151,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 300,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 370,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "displayTree1",
    "start": 384,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 399,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  }
]
```
