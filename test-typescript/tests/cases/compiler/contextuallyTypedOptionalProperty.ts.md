__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 297,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 68,
      "end": 124,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "match",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 119,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 119,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 98,
              "end": 119,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 107,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 107,
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 109,
                "end": 119,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 112,
                  "end": 119
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 123,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 123,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 189,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 147,
          "end": 178,
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 178,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 152,
              "end": 178,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 154,
                  "end": 165,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 166,
                  "end": 176,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 170,
                      "end": 176
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 179,
        "end": 188,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 181,
          "end": 188
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 219,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 219,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 194,
            "end": 218,
            "properties": [
              {
                "type": "Property",
                "start": 196,
                "end": 216,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 199,
                  "end": 216,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 205,
                      "end": 215,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 210,
                        "end": 215,
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 214,
                          "end": 215,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "decorators": [],
                    "name": "match",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 193,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 221,
      "end": 270,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 242,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 243,
          "end": 259,
          "decorators": [],
          "name": "point",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 259,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 250,
              "end": 259,
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "start": 251,
                  "end": 258,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 251,
                    "end": 257
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 260,
        "end": 269,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 262,
          "end": 269
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 296,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 296,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 276,
            "end": 295,
            "elements": [
              {
                "type": "CallExpression",
                "start": 277,
                "end": 294,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 283,
                    "end": 293,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 288,
                      "end": 293,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 292,
                        "end": 293,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "match",
                  "optional": false
                },
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 275,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
