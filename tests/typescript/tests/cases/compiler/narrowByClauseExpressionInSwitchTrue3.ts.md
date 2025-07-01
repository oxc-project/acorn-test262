__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 25
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 27,
                      "end": 35
                    },
                    "start": 27,
                    "end": 35
                  },
                  "start": 25,
                  "end": 35
                },
                "accessibility": null,
                "static": false,
                "start": 21,
                "end": 36
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 43
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "accessibility": null,
                "static": false,
                "start": 37,
                "end": 51
              }
            ],
            "start": 19,
            "end": 53
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "square",
                      "raw": "\"square\"",
                      "start": 68,
                      "end": 76
                    },
                    "start": 68,
                    "end": 76
                  },
                  "start": 66,
                  "end": 76
                },
                "accessibility": null,
                "static": false,
                "start": 62,
                "end": 77
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sideLength",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 88
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  },
                  "start": 88,
                  "end": 96
                },
                "accessibility": null,
                "static": false,
                "start": 78,
                "end": 96
              }
            ],
            "start": 60,
            "end": 98
          }
        ],
        "start": 17,
        "end": 98
      },
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wat",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
              },
              "typeArguments": null,
              "start": 120,
              "end": 125
            },
            "start": 118,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 141,
              "end": 145
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 172
                    },
                    "optional": false,
                    "computed": false,
                    "start": 162,
                    "end": 172
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "circle",
                    "raw": "\"circle\"",
                    "start": 177,
                    "end": 185
                  },
                  "start": 162,
                  "end": 185
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 210
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PI",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 213
                        },
                        "optional": false,
                        "computed": false,
                        "start": 206,
                        "end": 213
                      },
                      "operator": "*",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 221
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 228
                          },
                          "optional": false,
                          "computed": false,
                          "start": 216,
                          "end": 228
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 232,
                          "end": 233
                        },
                        "start": 216,
                        "end": 233
                      },
                      "start": 206,
                      "end": 233
                    },
                    "start": 199,
                    "end": 234
                  }
                ],
                "start": 157,
                "end": 234
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 253
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 258
                    },
                    "optional": false,
                    "computed": false,
                    "start": 248,
                    "end": 258
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "circle",
                    "raw": "\"circle\"",
                    "start": 263,
                    "end": 271
                  },
                  "start": 248,
                  "end": 271
                },
                "consequent": [],
                "start": 243,
                "end": 272
              }
            ],
            "start": 133,
            "end": 294
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 309
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "optional": false,
                "computed": false,
                "start": 304,
                "end": 314
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "circle",
                "raw": "\"circle\"",
                "start": 319,
                "end": 327
              },
              "start": 304,
              "end": 327
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PI",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 346,
                      "end": 353
                    },
                    "operator": "*",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 361
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 368
                        },
                        "optional": false,
                        "computed": false,
                        "start": 356,
                        "end": 368
                      },
                      "operator": "**",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 372,
                        "end": 373
                      },
                      "start": 356,
                      "end": 373
                    },
                    "start": 346,
                    "end": 373
                  },
                  "start": 339,
                  "end": 374
                }
              ],
              "start": 329,
              "end": 380
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 399
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 404
                  },
                  "optional": false,
                  "computed": false,
                  "start": 394,
                  "end": 404
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 409,
                  "end": 417
                },
                "start": 394,
                "end": 417
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 419,
                "end": 509
              },
              "alternate": null,
              "start": 390,
              "end": 509
            },
            "start": 300,
            "end": 509
          }
        ],
        "start": 127,
        "end": 511
      },
      "expression": false,
      "start": 100,
      "end": 511
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 511
}
```
