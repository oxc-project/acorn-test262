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
        "start": 50,
        "end": 53
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
              "start": 54,
              "end": 55
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    },
                    "start": 67,
                    "end": 75
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 66,
                  "end": 76
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 78,
                    "end": 86
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 86
                }
              ],
              "start": 64,
              "end": 88
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 88
          }
        ],
        "start": 53,
        "end": 89
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 112,
                            "end": 113
                          },
                          "typeArguments": null,
                          "start": 112,
                          "end": 113
                        },
                        "start": 106,
                        "end": 113
                      },
                      "start": 105,
                      "end": 116
                    },
                    "start": 103,
                    "end": 116
                  },
                  "start": 102,
                  "end": 116
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 120,
                      "end": 123
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 125,
                      "end": 128
                    }
                  ],
                  "start": 119,
                  "end": 129
                },
                "definite": false,
                "start": 102,
                "end": 129
              }
            ],
            "declare": false,
            "start": 98,
            "end": 130
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 149,
                          "end": 150
                        },
                        "start": 143,
                        "end": 150
                      },
                      "start": 142,
                      "end": 153
                    },
                    "start": 140,
                    "end": 153
                  },
                  "start": 139,
                  "end": 153
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 157,
                      "end": 160
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 162,
                      "end": 165
                    },
                    {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 167,
                      "end": 170
                    }
                  ],
                  "start": 156,
                  "end": 171
                },
                "definite": false,
                "start": 139,
                "end": 171
              }
            ],
            "declare": false,
            "start": 135,
            "end": 172
          }
        ],
        "start": 92,
        "end": 174
      },
      "expression": false,
      "start": 41,
      "end": 174
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 219
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 220,
              "end": 221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 220,
            "end": 221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "typeArguments": null,
                "start": 239,
                "end": 240
              },
              "start": 233,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 240
          }
        ],
        "start": 219,
        "end": 241
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            "start": 245,
            "end": 248
          },
          "start": 242,
          "end": 248
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "typeArguments": null,
                "start": 261,
                "end": 262
              },
              "start": 261,
              "end": 264
            },
            "start": 259,
            "end": 264
          },
          "start": 250,
          "end": 264
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 271
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
                  "start": 272,
                  "end": 273
                },
                "typeArguments": null,
                "start": 272,
                "end": 273
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 276
                },
                "typeArguments": null,
                "start": 275,
                "end": 276
              }
            ],
            "start": 271,
            "end": 277
          },
          "start": 267,
          "end": 277
        },
        "start": 265,
        "end": 277
      },
      "body": null,
      "expression": false,
      "start": 198,
      "end": 278
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pick",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 296
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 298,
                      "end": 300
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 295,
                    "end": 300
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 303
                    },
                    "value": {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 305,
                      "end": 307
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 302,
                    "end": 307
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 310
                    },
                    "value": {
                      "type": "Literal",
                      "value": 30,
                      "raw": "30",
                      "start": 312,
                      "end": 314
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 309,
                    "end": 314
                  }
                ],
                "start": 293,
                "end": 316
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 319,
                    "end": 322
                  },
                  {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 324,
                    "end": 327
                  }
                ],
                "start": 318,
                "end": 328
              }
            ],
            "optional": false,
            "start": 288,
            "end": 329
          },
          "definite": false,
          "start": 284,
          "end": 329
        }
      ],
      "declare": false,
      "start": 280,
      "end": 330
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "optional": false,
            "computed": false,
            "start": 339,
            "end": 342
          },
          "definite": false,
          "start": 335,
          "end": 342
        }
      ],
      "declare": false,
      "start": 331,
      "end": 343
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 353
}
```
