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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 15,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 22,
                "end": 28,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 46,
                "end": 51,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
            "value": 1,
            "raw": "1"
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 240,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 81,
            "end": 103,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 102,
                "id": {
                  "type": "ObjectPattern",
                  "start": 87,
                  "end": 98,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 89,
                      "end": 93,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 93,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 93,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 95,
                      "end": 96,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "a",
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
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 106,
            "end": 238,
            "discriminant": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 126,
                "end": 154,
                "test": {
                  "type": "Literal",
                  "start": 131,
                  "end": 134,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 142,
                    "end": 154,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 149,
                      "end": 153,
                      "object": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 151,
                        "end": 152,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 159,
                "end": 184,
                "test": {
                  "type": "Literal",
                  "start": 164,
                  "end": 167,
                  "value": "b",
                  "raw": "\"b\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 184,
                    "argument": {
                      "type": "Literal",
                      "start": 182,
                      "end": 183,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 189,
                "end": 234,
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 218,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 217,
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
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
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
