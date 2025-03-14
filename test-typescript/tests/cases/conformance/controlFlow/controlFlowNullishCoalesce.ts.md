__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 48,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 63,
      "expression": {
        "type": "LogicalExpression",
        "start": 50,
        "end": 62,
        "operator": "??",
        "left": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 56,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 60,
            "end": 61,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 76,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 64,
          "end": 74,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 74,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 140,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 140,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 115,
                "end": 140,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 115,
                    "end": 128,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 117,
                        "end": 126,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 118,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 131,
                    "end": 140
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 172,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 172,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 149,
                "end": 172,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 149,
                    "end": 162,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 151,
                        "end": 160,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 152,
                          "end": 160,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 154,
                            "end": 160
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 174,
      "end": 203,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 193,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 199,
            "end": 201,
            "expression": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 178,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 182,
          "end": 191,
          "operator": "??",
          "left": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 187,
            "end": 191,
            "raw": "true",
            "value": true
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
