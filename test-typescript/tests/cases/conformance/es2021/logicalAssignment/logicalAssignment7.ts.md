__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
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
          "start": 14,
          "end": 43,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 43,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 23,
              "end": 43,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 23,
                  "end": 31,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 34,
                  "end": 43
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 75,
          "name": "results1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 75,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 55,
              "end": 75,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 55,
                  "end": 63,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 66,
                  "end": 75
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 123,
            "expression": {
              "type": "CallExpression",
              "start": 83,
              "end": 122,
              "callee": {
                "type": "MemberExpression",
                "start": 83,
                "end": 117,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 84,
                  "end": 111,
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 91,
                    "name": "results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 96,
                    "end": 111,
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 104,
                      "name": "results1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 109,
                      "end": 111,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 117,
                  "name": "push",
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
                  "start": 118,
                  "end": 121,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 140,
        "name": "foo2",
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
          "start": 141,
          "end": 170,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 170,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 150,
              "end": 170,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 150,
                  "end": 158,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 161,
                  "end": 170
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 172,
          "end": 202,
          "name": "results1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 202,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 182,
              "end": 202,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 182,
                  "end": 190,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 182,
                    "end": 188
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 193,
                  "end": 202
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 210,
            "end": 250,
            "expression": {
              "type": "CallExpression",
              "start": 210,
              "end": 249,
              "callee": {
                "type": "MemberExpression",
                "start": 210,
                "end": 244,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 211,
                  "end": 238,
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 218,
                    "name": "results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 223,
                    "end": 238,
                    "operator": "??=",
                    "left": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 231,
                      "name": "results1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 236,
                      "end": 238,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 244,
                  "name": "push",
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
                  "start": 245,
                  "end": 248,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 267,
        "name": "foo3",
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
          "start": 268,
          "end": 297,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 297,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 277,
              "end": 297,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 277,
                  "end": 285,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 277,
                    "end": 283
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 288,
                  "end": 297
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 299,
          "end": 329,
          "name": "results1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 329,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 309,
              "end": 329,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 309,
                  "end": 317,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 309,
                    "end": 315
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 320,
                  "end": 329
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 379,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 337,
            "end": 377,
            "expression": {
              "type": "CallExpression",
              "start": 337,
              "end": 376,
              "callee": {
                "type": "MemberExpression",
                "start": 337,
                "end": 371,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 338,
                  "end": 365,
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 345,
                    "name": "results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 350,
                    "end": 365,
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 358,
                      "name": "results1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 363,
                      "end": 365,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 371,
                  "name": "push",
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
                  "start": 372,
                  "end": 375,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
