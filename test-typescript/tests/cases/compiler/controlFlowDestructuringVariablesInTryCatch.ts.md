controlFlowDestructuringVariablesInTryCatch.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 276,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 21,
        "end": 29,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 66,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 54,
          "end": 65,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 55,
              "end": 64,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              },
              "label": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 104,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 90,
          "end": 103,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 92,
              "end": 101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "TryStatement",
      "start": 106,
      "end": 259,
      "block": {
        "type": "BlockStatement",
        "start": 110,
        "end": 221,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 128,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 124,
                  "end": 128,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 126,
                    "decorators": [],
                    "name": "f1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 149,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 138,
                "end": 148,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 138,
                  "end": 141,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 144,
                  "end": 148,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 146,
                    "decorators": [],
                    "name": "f2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 170,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 158,
                  "end": 163,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 160,
                      "end": 161,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "CallExpression",
                  "start": 166,
                  "end": 170,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 168,
                    "decorators": [],
                    "name": "f3",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 193,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 181,
                  "end": 188,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 182,
                      "end": 187,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 186,
                        "end": 187,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 191,
                  "end": 193,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 199,
            "end": 219,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 203,
                "end": 218,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 203,
                  "end": 212,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 205,
                      "end": 210,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "e",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 205,
                        "end": 210,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 209,
                          "end": 210,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  ]
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 215,
                  "end": 218,
                  "properties": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 222,
        "end": 259,
        "body": {
          "type": "BlockStatement",
          "start": 228,
          "end": 259,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 234,
              "end": 257,
              "expression": {
                "type": "CallExpression",
                "start": 234,
                "end": 256,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 255,
                    "raw": "\"error\"",
                    "value": "error"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 234,
                  "end": 247,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 241,
                    "decorators": [],
                    "name": "console",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "decorators": [],
                    "name": "error",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "param": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 263,
      "expression": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 266,
      "expression": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 269,
      "expression": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 272,
      "expression": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 275,
      "expression": {
        "type": "Identifier",
        "start": 273,
        "end": 274,
        "decorators": [],
        "name": "e",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
