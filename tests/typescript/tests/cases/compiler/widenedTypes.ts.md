__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 0,
          "end": 4
        },
        "operator": "instanceof",
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 23,
            "end": 26
          },
          "id": null,
          "generator": false,
          "start": 17,
          "end": 26
        },
        "start": 0,
        "end": 27
      },
      "directive": null,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 30,
          "end": 32
        },
        "operator": "instanceof",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 45,
          "end": 49
        },
        "start": 29,
        "end": 49
      },
      "directive": null,
      "start": 29,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 96,
          "end": 100
        },
        "operator": "in",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 104,
          "end": 106
        },
        "start": 96,
        "end": 106
      },
      "directive": null,
      "start": 96,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 108,
          "end": 110
        },
        "operator": "in",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 114,
          "end": 118
        },
        "start": 108,
        "end": 118
      },
      "directive": null,
      "start": 108,
      "end": 119
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "init": null,
            "definite": false,
            "start": 130,
            "end": 131
          }
        ],
        "declare": false,
        "start": 126,
        "end": 131
      },
      "right": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 135,
        "end": 139
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 141,
        "end": 144
      },
      "start": 121,
      "end": 144
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 155,
                "end": 156
              },
              {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 159,
                    "end": 160
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 162,
                    "end": 166
                  }
                ],
                "start": 159,
                "end": 166
              }
            ],
            "start": 154,
            "end": 168
          },
          "definite": false,
          "start": 150,
          "end": 168
        }
      ],
      "declare": false,
      "start": 146,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 171
          },
          "property": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 172,
            "end": 173
          },
          "optional": false,
          "computed": true,
          "start": 170,
          "end": 174
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 177,
          "end": 179
        },
        "start": 170,
        "end": 179
      },
      "directive": null,
      "start": 170,
      "end": 180
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 205
                },
                "typeArguments": null,
                "start": 189,
                "end": 205
              },
              "start": 187,
              "end": 205
            },
            "start": 186,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 208,
            "end": 209
          },
          "definite": false,
          "start": 186,
          "end": 209
        }
      ],
      "declare": false,
      "start": 182,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 215,
          "end": 216
        },
        "start": 211,
        "end": 216
      },
      "directive": null,
      "start": 211,
      "end": 217
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
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 223,
          "end": 224
        }
      ],
      "declare": false,
      "start": 219,
      "end": 225
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 235,
                "end": 236
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 243,
                  "end": 247
                },
                "start": 239,
                "end": 247
              }
            ],
            "start": 234,
            "end": 249
          },
          "definite": false,
          "start": 230,
          "end": 249
        }
      ],
      "declare": false,
      "start": 226,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 252
          },
          "property": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 253,
            "end": 254
          },
          "optional": false,
          "computed": true,
          "start": 251,
          "end": 255
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 258,
          "end": 260
        },
        "start": 251,
        "end": 260
      },
      "directive": null,
      "start": 251,
      "end": 261
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
            "name": "ob",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 292
                        },
                        "typeArguments": null,
                        "start": 276,
                        "end": 292
                      },
                      "start": 274,
                      "end": 292
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 273,
                    "end": 292
                  }
                ],
                "start": 271,
                "end": 294
              },
              "start": 269,
              "end": 294
            },
            "start": 267,
            "end": 294
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 300
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 302,
                  "end": 304
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 304
              }
            ],
            "start": 297,
            "end": 306
          },
          "definite": false,
          "start": 267,
          "end": 306
        }
      ],
      "declare": false,
      "start": 263,
      "end": 307
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 390,
                  "end": 396
                },
                "start": 390,
                "end": 398
              },
              "start": 388,
              "end": 398
            },
            "start": 385,
            "end": 398
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 402,
                "end": 403
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 405,
                "end": 409
              }
            ],
            "start": 401,
            "end": 410
          },
          "definite": false,
          "start": 385,
          "end": 410
        }
      ],
      "declare": false,
      "start": 381,
      "end": 411
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 484,
                            "end": 490
                          },
                          "start": 482,
                          "end": 490
                        },
                        "start": 481,
                        "end": 490
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 493,
                        "end": 499
                      },
                      "start": 491,
                      "end": 499
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 480,
                    "end": 500
                  }
                ],
                "start": 478,
                "end": 502
              },
              "start": 476,
              "end": 502
            },
            "start": 473,
            "end": 502
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 508
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 510,
                  "end": 511
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 507,
                "end": 511
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 514
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 516,
                  "end": 520
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 513,
                "end": 520
              }
            ],
            "start": 505,
            "end": 522
          },
          "definite": false,
          "start": 473,
          "end": 522
        }
      ],
      "declare": false,
      "start": 469,
      "end": 523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 587
}
```
