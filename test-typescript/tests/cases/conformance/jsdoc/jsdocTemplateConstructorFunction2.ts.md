__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 542,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 105,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 88,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 82,
              "end": 88,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 82,
                "end": 86
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 103,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 93,
              "end": 103,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 93,
                "end": 99,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 93,
                  "end": 97
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "Zet",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 257,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 174,
          "end": 191,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 174,
            "end": 187,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 178,
              "end": 187,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 188,
            "end": 191,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 194,
          "end": 257,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 209,
            "end": 257,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 215,
                "end": 237,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 215,
                  "end": 237,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 215,
                    "end": 221,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 215,
                      "end": 219
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 224,
                    "end": 237,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 229,
                      "end": 237,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 237,
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              {
                "type": "ReturnStatement",
                "start": 242,
                "end": 255,
                "argument": {
                  "type": "MemberExpression",
                  "start": 249,
                  "end": 255,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 249,
                    "end": 253
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 266,
            "end": 276,
            "arguments": [
              {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 277,
          "end": 280,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 283,
          "end": 284,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 296,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 296,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 285,
          "end": 288,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 291,
          "end": 296,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 329,
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 355,
            "arguments": [
              {
                "type": "Literal",
                "start": 338,
                "end": 339,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ObjectExpression",
                "start": 341,
                "end": 354,
                "properties": [
                  {
                    "type": "Property",
                    "start": 343,
                    "end": 352,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 349,
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 351,
                      "end": 352,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 332,
              "end": 337,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 337,
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 523,
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 526,
            "end": 541,
            "properties": [
              {
                "type": "Property",
                "start": 528,
                "end": 539,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 533,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 535,
                  "end": 539,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
