contextualTypingArrayDestructuringWithDefaults.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 19,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 17,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 14,
                "end": 17,
                "literal": {
                  "type": "Literal",
                  "start": 14,
                  "end": 17,
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 53,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 25,
            "end": 48,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 27,
                "end": 40,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 29,
                  "decorators": [],
                  "name": "c0",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 32,
                  "end": 40,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 33,
                      "end": 39,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 36,
                        "end": 39,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 44,
                "end": 48,
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "start": 45,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 46,
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 46,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 51,
            "end": 53,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 100,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 59,
            "end": 94,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 63,
                "decorators": [],
                "name": "x1",
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 65,
                "end": 78,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 67,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 70,
                  "end": 78,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 71,
                      "end": 77,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 74,
                        "end": 77,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 82,
                "end": 94,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 91,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 97,
            "end": 100,
            "elements": [
              {
                "type": "Literal",
                "start": 98,
                "end": 99,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 133,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 106,
            "end": 128,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 108,
                "end": 121,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 110,
                  "decorators": [],
                  "name": "c_",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 113,
                  "end": 121,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 114,
                      "end": 120,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 117,
                        "end": 120,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 128,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 125,
                "end": 128,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 125,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 131,
            "end": 133,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 256,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 256,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 234,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 201,
                  "end": 228,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 202,
                      "end": 217,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 208,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 202,
                        "end": 217,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 208,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ObjectExpression",
                          "start": 211,
                          "end": 217,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 212,
                              "end": 216,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 212,
                                "end": 213,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 215,
                                "end": 216,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 220,
                      "end": 228,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 221,
                          "end": 227
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 231,
                  "end": 234,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 232,
                      "end": 233,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 240,
            "end": 254,
            "argument": {
              "type": "Identifier",
              "start": 247,
              "end": 253,
              "decorators": [],
              "name": "length",
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
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
