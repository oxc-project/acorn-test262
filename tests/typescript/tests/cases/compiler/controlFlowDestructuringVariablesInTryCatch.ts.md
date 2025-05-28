__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "label": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              },
              "optional": false
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 124,
                  "end": 128,
                  "callee": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 126,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 149,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 138,
                "end": 148,
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
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 171,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 170,
                "id": {
                  "type": "ObjectPattern",
                  "start": 158,
                  "end": 163,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 160,
                      "end": 161,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 194,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 193,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 186,
                        "end": 187,
                        "value": 1,
                        "raw": "1"
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 199,
            "end": 219,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 203,
                "end": 218,
                "id": {
                  "type": "ObjectPattern",
                  "start": 203,
                  "end": 212,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 205,
                      "end": 210,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 209,
                          "end": 210,
                          "value": 1,
                          "raw": "1"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 255,
                    "value": "error",
                    "raw": "\"error\""
                  }
                ],
                "optional": false
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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
