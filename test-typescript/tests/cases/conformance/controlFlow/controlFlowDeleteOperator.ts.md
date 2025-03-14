__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 237,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 237,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 26,
                      "end": 69,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 28,
                          "end": 48,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 29,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 30,
                            "end": 47,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 32,
                              "end": 47,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 32,
                                  "end": 38
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 41,
                                  "end": 47
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 49,
                          "end": 67,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 50,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 52,
                              "end": 67,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 52,
                                  "end": 58
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 72,
                  "end": 80,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 74,
                      "end": 78,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 77,
                        "end": 78,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 90,
            "expression": {
              "type": "MemberExpression",
              "start": 86,
              "end": 89,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 99,
            "expression": {
              "type": "MemberExpression",
              "start": 95,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 112,
            "expression": {
              "type": "AssignmentExpression",
              "start": 104,
              "end": 111,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 104,
                "end": 107,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 110,
                "end": 111,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 125,
            "expression": {
              "type": "AssignmentExpression",
              "start": 117,
              "end": 124,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 117,
                "end": 120,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 123,
                "end": 124,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 130,
            "end": 134,
            "expression": {
              "type": "MemberExpression",
              "start": 130,
              "end": 133,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 143,
            "expression": {
              "type": "MemberExpression",
              "start": 139,
              "end": 142,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 159,
            "expression": {
              "type": "UnaryExpression",
              "start": 148,
              "end": 158,
              "argument": {
                "type": "MemberExpression",
                "start": 155,
                "end": 158,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "operator": "delete",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 164,
            "end": 175,
            "expression": {
              "type": "UnaryExpression",
              "start": 164,
              "end": 174,
              "argument": {
                "type": "MemberExpression",
                "start": 171,
                "end": 174,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "operator": "delete",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 184,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 183,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 189,
            "end": 193,
            "expression": {
              "type": "MemberExpression",
              "start": 189,
              "end": 192,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 200,
            "expression": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 214,
            "expression": {
              "type": "UnaryExpression",
              "start": 205,
              "end": 213,
              "argument": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "operator": "delete",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 235,
            "expression": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
