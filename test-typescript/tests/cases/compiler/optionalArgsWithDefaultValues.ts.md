__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 13,
          "end": 22,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 24,
          "end": 40,
          "left": {
            "type": "Identifier",
            "start": 24,
            "end": 34,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              }
            },
            "decorators": [],
            "optional": true
          },
          "right": {
            "type": "Literal",
            "start": 35,
            "end": 40,
            "value": false,
            "raw": "false"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 42,
          "end": 46,
          "left": {
            "type": "Identifier",
            "start": 42,
            "end": 44,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": true
          },
          "right": {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "value": 0,
            "raw": "0"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 50,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "name": "CCC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 106,
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 100,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 93,
                        "end": 100
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 101,
                    "end": 106,
                    "value": false,
                    "raw": "false"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 108,
                  "end": 112,
                  "left": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 110,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 111,
                    "end": 112,
                    "value": 0,
                    "raw": "0"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 116,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 170,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 132,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 170,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 136,
                      "end": 142
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 144,
                  "end": 160,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 154,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 147,
                        "end": 154
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 155,
                    "end": 160,
                    "value": false,
                    "raw": "false"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 162,
                  "end": 166,
                  "left": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 164,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 165,
                    "end": 166,
                    "value": 0,
                    "raw": "0"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 170,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 182,
            "end": 205,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 183,
                "end": 187,
                "left": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 185,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "value": 0,
                  "raw": "0"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 192,
              "end": 205,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 194,
                  "end": 203,
                  "argument": {
                    "type": "Literal",
                    "start": 201,
                    "end": 202,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 243,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 219,
                "end": 232,
                "left": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 228,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 222,
                      "end": 228
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 231,
                  "end": 232,
                  "value": 2,
                  "raw": "2"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 243,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 239,
                  "end": 241,
                  "expression": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
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
