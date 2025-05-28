__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 54,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 53,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 32,
                  "end": 40,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 33,
                      "end": 39,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 36,
                        "end": 39,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 101,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 100,
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 70,
                  "end": 78,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 71,
                      "end": 77,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 74,
                        "end": 77,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 134,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 133,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 113,
                  "end": 121,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 114,
                      "end": 120,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 117,
                        "end": 120,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 131,
            "end": 133,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 256,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 235,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 234,
                "id": {
                  "type": "ObjectPattern",
                  "start": 201,
                  "end": 228,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 202,
                      "end": 217,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 208,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 211,
                          "end": 217,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 212,
                              "end": 216,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 212,
                                "end": 213,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 215,
                                "end": 216,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
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
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
