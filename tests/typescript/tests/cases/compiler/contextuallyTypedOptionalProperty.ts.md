__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 296,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 68,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 166,
                  "end": 176,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 170,
                      "end": 176
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 219,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 219,
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 193,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 199,
                  "end": 216,
                  "callee": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 205,
                      "end": 215,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 210,
                        "end": 215,
                        "left": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "start": 214,
                          "end": 215,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 221,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 242,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 296,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 275,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "callee": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 283,
                    "end": 293,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 288,
                      "end": 293,
                      "left": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 292,
                        "end": 293,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
