__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 19,
                "end": 49,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 20,
                    "end": 27
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSRestType",
                    "start": 37,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 40,
                      "end": 48,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 85,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 84,
          "id": {
            "type": "ArrayPattern",
            "start": 58,
            "end": 76,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 68,
                "end": 75,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 84,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 121,
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 109,
                "end": 121,
                "exprName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 146,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 145,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 124,
          "end": 137,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 125,
              "end": 136,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "receiver",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 140,
          "end": 145,
          "decorators": [],
          "name": "tuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 239,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 238,
          "id": {
            "type": "ArrayPattern",
            "start": 177,
            "end": 184,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 178,
                "end": 183,
                "decorators": [],
                "name": "oops1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 187,
            "end": 238,
            "callee": {
              "type": "MemberExpression",
              "start": 187,
              "end": 203,
              "object": {
                "type": "ArrayExpression",
                "start": 187,
                "end": 196,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 188,
                    "end": 189,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 191,
                    "end": 192,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 194,
                    "end": 195,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 203,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 204,
                "end": 233,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 205,
                    "end": 209,
                    "decorators": [],
                    "name": "accu",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 211,
                    "end": 213,
                    "decorators": [],
                    "name": "el",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 218,
                  "end": 233,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 218,
                    "end": 229,
                    "object": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 222,
                      "decorators": [],
                      "name": "accu",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 229,
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 232,
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrayExpression",
                "start": 235,
                "end": 237,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 315,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 314,
          "id": {
            "type": "ArrayPattern",
            "start": 247,
            "end": 254,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 253,
                "decorators": [],
                "name": "oops2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 314,
            "callee": {
              "type": "MemberExpression",
              "start": 257,
              "end": 273,
              "object": {
                "type": "ArrayExpression",
                "start": 257,
                "end": 266,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 258,
                    "end": 259,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 261,
                    "end": 262,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 264,
                    "end": 265,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 273,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 274,
                "end": 309,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 275,
                    "end": 288,
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 278,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 280,
                        "end": 288,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 280,
                          "end": 286
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 296,
                  "end": 309,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 296,
                    "end": 306,
                    "object": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 299,
                      "decorators": [],
                      "name": "acc",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 306,
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrayExpression",
                "start": 311,
                "end": 313,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
