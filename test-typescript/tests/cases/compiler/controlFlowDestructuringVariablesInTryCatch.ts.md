__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
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
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                }
              },
              "accessibility": null,
              "static": false
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
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 124,
                  "end": 128,
                  "callee": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 126,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "ArrayPattern",
                  "start": 138,
                  "end": 141,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 144,
                  "end": 148,
                  "callee": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 146,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 158,
                  "end": 163,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 160,
                      "end": 161,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 166,
                  "end": 170,
                  "callee": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 168,
                    "name": "f3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "ArrayPattern",
                  "start": 181,
                  "end": 188,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 182,
                      "end": 187,
                      "left": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 186,
                        "end": 187,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 191,
                  "end": 193,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 203,
                  "end": 212,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 205,
                      "end": 210,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 205,
                        "end": 210,
                        "left": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 209,
                          "end": 210,
                          "value": 1,
                          "raw": "1"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 215,
                  "end": 218,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 222,
        "end": 259,
        "param": null,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 234,
                  "end": 247,
                  "object": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 241,
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "name": "error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 255,
                    "value": "error",
                    "raw": "\"error\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 263,
      "expression": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 266,
      "expression": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 269,
      "expression": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 272,
      "expression": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 275,
      "expression": {
        "type": "Identifier",
        "start": 273,
        "end": 274,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
