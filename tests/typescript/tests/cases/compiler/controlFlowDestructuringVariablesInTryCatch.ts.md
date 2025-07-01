__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        },
        "start": 21,
        "end": 29
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              },
              "optional": false,
              "start": 55,
              "end": 64
            }
          ],
          "start": 54,
          "end": 65
        },
        "start": 52,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 31,
      "end": 66
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                },
                "start": 93,
                "end": 101
              },
              "accessibility": null,
              "static": false,
              "start": 92,
              "end": 101
            }
          ],
          "start": 90,
          "end": 103
        },
        "start": 88,
        "end": 103
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 104
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 124,
                  "end": 128
                },
                "definite": false,
                "start": 120,
                "end": 128
              }
            ],
            "declare": false,
            "start": 116,
            "end": 129
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 141
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 144,
                  "end": 148
                },
                "definite": false,
                "start": 138,
                "end": 148
              }
            ],
            "declare": false,
            "start": 134,
            "end": 149
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 160,
                      "end": 161
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 163
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 168
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 166,
                  "end": 170
                },
                "definite": false,
                "start": 158,
                "end": 170
              }
            ],
            "declare": false,
            "start": 154,
            "end": 171
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 183
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 186,
                        "end": 187
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 187
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 191,
                  "end": 193
                },
                "definite": false,
                "start": 181,
                "end": 193
              }
            ],
            "declare": false,
            "start": 177,
            "end": 194
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 206
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 209,
                          "end": 210
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 210
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 205,
                      "end": 210
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 212
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 215,
                  "end": 218
                },
                "definite": false,
                "start": 203,
                "end": 218
              }
            ],
            "declare": false,
            "start": 199,
            "end": 219
          }
        ],
        "start": 110,
        "end": 221
      },
      "handler": {
        "type": "CatchClause",
        "param": null,
        "body": {
          "type": "BlockStatement",
          "body": [
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
                    "start": 234,
                    "end": 241
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 247
                  },
                  "optional": false,
                  "computed": false,
                  "start": 234,
                  "end": 247
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "error",
                    "raw": "\"error\"",
                    "start": 248,
                    "end": 255
                  }
                ],
                "optional": false,
                "start": 234,
                "end": 256
              },
              "directive": null,
              "start": 234,
              "end": 257
            }
          ],
          "start": 228,
          "end": 259
        },
        "start": 222,
        "end": 259
      },
      "finalizer": null,
      "start": 106,
      "end": 259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 262
      },
      "directive": null,
      "start": 261,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 265
      },
      "directive": null,
      "start": 264,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 268
      },
      "directive": null,
      "start": 267,
      "end": 269
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 271
      },
      "directive": null,
      "start": 270,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 274
      },
      "directive": null,
      "start": 273,
      "end": 275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 275
}
```
