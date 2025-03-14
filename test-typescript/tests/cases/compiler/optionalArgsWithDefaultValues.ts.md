optionalArgsWithDefaultValues.ts
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 50,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 24,
          "end": 40,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 24,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 35,
            "end": 40,
            "raw": "false",
            "value": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 42,
          "end": 46,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 42,
            "end": 44,
            "decorators": [],
            "name": "z",
            "optional": true
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "raw": "0",
            "value": 0
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 116,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 116,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 106,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 100,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 93,
                        "end": 100
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 101,
                    "end": 106,
                    "raw": "false",
                    "value": false
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 108,
                  "end": 112,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 110,
                    "decorators": [],
                    "name": "z",
                    "optional": true
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 111,
                    "end": 112,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 170,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 132,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 170,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 136,
                      "end": 142
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 144,
                  "end": 160,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 154,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 147,
                        "end": 154
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 155,
                    "end": 160,
                    "raw": "false",
                    "value": false
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 162,
                  "end": 166,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 164,
                    "decorators": [],
                    "name": "z",
                    "optional": true
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 165,
                    "end": 166,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "CCC",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 182,
            "end": 205,
            "async": false,
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
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 183,
                "end": 187,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 185,
                  "decorators": [],
                  "name": "x",
                  "optional": true
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 243,
            "async": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 219,
                "end": 232,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 228,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 222,
                      "end": 228
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 231,
                  "end": 232,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
