logicalAssignment6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 125,
            "expression": {
              "type": "CallExpression",
              "start": 83,
              "end": 124,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 120,
                  "end": 123,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 83,
                "end": 119,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 84,
                  "end": 113,
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 91,
                    "decorators": [],
                    "name": "results",
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 97,
                    "end": 112,
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 105,
                      "decorators": [],
                      "name": "results1",
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 110,
                      "end": 112,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
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
        "optional": false
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
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 256,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 256,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 212,
            "end": 254,
            "expression": {
              "type": "CallExpression",
              "start": 212,
              "end": 253,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 249,
                  "end": 252,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 212,
                "end": 248,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 213,
                  "end": 242,
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 220,
                    "decorators": [],
                    "name": "results",
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 226,
                    "end": 241,
                    "operator": "??=",
                    "left": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 234,
                      "decorators": [],
                      "name": "results1",
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 239,
                      "end": 241,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 248,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 172,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 172,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 152,
              "end": 172,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 152,
                  "end": 160,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 163,
                  "end": 172
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 174,
          "end": 204,
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 182,
            "end": 204,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 184,
              "end": 204,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 184,
                  "end": 192,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 184,
                    "end": 190
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 195,
                  "end": 204
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 341,
            "end": 383,
            "expression": {
              "type": "CallExpression",
              "start": 341,
              "end": 382,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 378,
                  "end": 381,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 341,
                "end": 377,
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 342,
                  "end": 371,
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 349,
                    "decorators": [],
                    "name": "results",
                    "optional": false
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 355,
                    "end": 370,
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 363,
                      "decorators": [],
                      "name": "results1",
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 368,
                      "end": 370,
                      "elements": []
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 377,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 271,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 272,
          "end": 301,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 301,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 281,
              "end": 301,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 281,
                  "end": 289,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 281,
                    "end": 287
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 292,
                  "end": 301
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 303,
          "end": 333,
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 311,
            "end": 333,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 313,
              "end": 333,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 313,
                  "end": 321,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 313,
                    "end": 319
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 324,
                  "end": 333
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
