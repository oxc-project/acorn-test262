__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Facts",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  },
                  "start": 19,
                  "end": 27
                },
                "start": 16,
                "end": 27
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              },
              "start": 28,
              "end": 37
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 15,
            "end": 37
          }
        ],
        "start": 13,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checkTruths",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 78
              },
              "typeArguments": null,
              "start": 73,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "start": 70,
          "end": 78
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 81,
          "end": 85
        },
        "start": 79,
        "end": 85
      },
      "body": null,
      "expression": false,
      "start": 41,
      "end": 86
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checkM",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 119,
                      "end": 126
                    },
                    "start": 117,
                    "end": 126
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 116,
                  "end": 126
                }
              ],
              "start": 114,
              "end": 128
            },
            "start": 112,
            "end": 128
          },
          "start": 111,
          "end": 128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        },
        "start": 129,
        "end": 135
      },
      "body": null,
      "expression": false,
      "start": 87,
      "end": 136
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 156,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 160
              }
            ],
            "start": 147,
            "end": 162
          },
          "definite": false,
          "start": 143,
          "end": 162
        }
      ],
      "declare": false,
      "start": 137,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "checkTruths",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 192
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          }
        ],
        "optional": false,
        "start": 181,
        "end": 195
      },
      "directive": null,
      "start": 181,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "checkM",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          }
        ],
        "optional": false,
        "start": 213,
        "end": 222
      },
      "directive": null,
      "start": 213,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 235
          },
          "optional": false,
          "computed": false,
          "start": 224,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "optional": false,
            "computed": false,
            "start": 236,
            "end": 239
          }
        ],
        "optional": false,
        "start": 224,
        "end": 240
      },
      "directive": null,
      "start": 224,
      "end": 241
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 300,
                "end": 307
              },
              "start": 298,
              "end": 307
            },
            "start": 297,
            "end": 307
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "optional": false,
            "computed": false,
            "start": 310,
            "end": 313
          },
          "definite": false,
          "start": 297,
          "end": 313
        }
      ],
      "declare": false,
      "start": 291,
      "end": 314
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 339
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 356
          },
          "typeArguments": null,
          "start": 348,
          "end": 356
        },
        "start": 342,
        "end": 356
      },
      "declare": false,
      "start": 333,
      "end": 357
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 410
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 422,
                    "end": 426
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 419,
                  "end": 426
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "value": {
                    "type": "Literal",
                    "value": "false",
                    "raw": "\"false\"",
                    "start": 435,
                    "end": 442
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 432,
                  "end": 442
                }
              ],
              "start": 413,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 460
              },
              "typeArguments": null,
              "start": 455,
              "end": 460
            },
            "start": 413,
            "end": 460
          },
          "definite": false,
          "start": 408,
          "end": 460
        }
      ],
      "declare": false,
      "start": 402,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
