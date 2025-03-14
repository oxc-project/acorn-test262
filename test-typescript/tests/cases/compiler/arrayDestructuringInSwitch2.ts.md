__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 53,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 9,
            "end": 30,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 11,
                "end": 21,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 15,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 15,
                  "end": 20,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 17,
                    "end": 20,
                    "literal": {
                      "type": "Literal",
                      "start": 17,
                      "end": 20,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 22,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 25,
                    "end": 28,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 26,
                        "end": 27,
                        "literal": {
                          "type": "Literal",
                          "start": 26,
                          "end": 27,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 33,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 35,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 41,
                    "end": 44,
                    "literal": {
                      "type": "Literal",
                      "start": 41,
                      "end": 44,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 46,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 49,
                    "end": 51,
                    "elementTypes": []
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 240,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 81,
            "end": 103,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 102,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 87,
                  "end": 98,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 89,
                      "end": 93,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 93,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 93,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 95,
                      "end": 96,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "SwitchStatement",
            "start": 106,
            "end": 238,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 126,
                "end": 154,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 142,
                    "end": 154,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 149,
                      "end": 153,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 151,
                        "end": 152,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 131,
                  "end": 134,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "SwitchCase",
                "start": 159,
                "end": 184,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 184,
                    "argument": {
                      "type": "Literal",
                      "start": 182,
                      "end": 183,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 164,
                  "end": 167,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "SwitchCase",
                "start": 189,
                "end": 234,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 218,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 217,
                        "definite": false,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 210,
                          "end": 213,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 211,
                              "end": 212,
                              "decorators": [],
                              "name": "n",
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 225,
                    "end": 234,
                    "argument": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "kind",
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
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 72,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 76,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 75,
          "end": 76,
          "literal": {
            "type": "Literal",
            "start": 75,
            "end": 76,
            "raw": "1",
            "value": 1
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
