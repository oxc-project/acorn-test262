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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 123,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 83,
              "end": 122,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 118,
                  "end": 121,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 83,
                "end": 117,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 84,
                  "end": 111,
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 91,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 109,
                      "end": 111,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 117,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 43,
          "decorators": [],
          "name": "results",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 75,
          "decorators": [],
          "name": "results1",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 210,
            "end": 250,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 210,
              "end": 249,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 245,
                  "end": 248,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 210,
                "end": 244,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 211,
                  "end": 238,
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 218,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 236,
                      "end": 238,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 244,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 140,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 170,
          "decorators": [],
          "name": "results",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 172,
          "end": 202,
          "decorators": [],
          "name": "results1",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 379,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 379,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 337,
            "end": 377,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 337,
              "end": 376,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 372,
                  "end": 375,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 337,
                "end": 371,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 338,
                  "end": 365,
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 345,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 363,
                      "end": 365,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 371,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 267,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 268,
          "end": 297,
          "decorators": [],
          "name": "results",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 299,
          "end": 329,
          "decorators": [],
          "name": "results1",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
