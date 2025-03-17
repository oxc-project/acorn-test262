__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 512,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 17,
        "end": 98,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 19,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 21,
                "end": 36,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 25,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 27,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 27,
                      "end": 35,
                      "value": "circle",
                      "raw": "\"circle\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 37,
                "end": 51,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 43,
                  "name": "radius",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 60,
            "end": 98,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 62,
                "end": 77,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 68,
                    "end": 76,
                    "literal": {
                      "type": "Literal",
                      "start": 68,
                      "end": 76,
                      "value": "square",
                      "raw": "\"square\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 78,
                "end": 96,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 88,
                  "name": "sideLength",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
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
      "start": 100,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "name": "wat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 125,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 511,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 133,
            "end": 294,
            "discriminant": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 157,
                "end": 234,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 199,
                    "end": 234,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 206,
                      "end": 233,
                      "left": {
                        "type": "MemberExpression",
                        "start": 206,
                        "end": 213,
                        "object": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 210,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 213,
                          "name": "PI",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 216,
                        "end": 233,
                        "left": {
                          "type": "MemberExpression",
                          "start": 216,
                          "end": 228,
                          "object": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 221,
                            "name": "shape",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 228,
                            "name": "radius",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "start": 232,
                          "end": 233,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 162,
                  "end": 185,
                  "left": {
                    "type": "MemberExpression",
                    "start": 162,
                    "end": 172,
                    "object": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 167,
                      "name": "shape",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 172,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 177,
                    "end": 185,
                    "value": "circle",
                    "raw": "\"circle\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 243,
                "end": 272,
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "start": 248,
                  "end": 271,
                  "left": {
                    "type": "MemberExpression",
                    "start": 248,
                    "end": 258,
                    "object": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 253,
                      "name": "shape",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 258,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 263,
                    "end": 271,
                    "value": "circle",
                    "raw": "\"circle\""
                  }
                }
              }
            ]
          },
          {
            "type": "IfStatement",
            "start": 300,
            "end": 509,
            "test": {
              "type": "BinaryExpression",
              "start": 304,
              "end": 327,
              "left": {
                "type": "MemberExpression",
                "start": 304,
                "end": 314,
                "object": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 309,
                  "name": "shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 314,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 319,
                "end": 327,
                "value": "circle",
                "raw": "\"circle\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 329,
              "end": 380,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 339,
                  "end": 374,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 346,
                    "end": 373,
                    "left": {
                      "type": "MemberExpression",
                      "start": 346,
                      "end": 353,
                      "object": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 350,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 353,
                        "name": "PI",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 356,
                      "end": 373,
                      "left": {
                        "type": "MemberExpression",
                        "start": 356,
                        "end": 368,
                        "object": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 361,
                          "name": "shape",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 368,
                          "name": "radius",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "**",
                      "right": {
                        "type": "Literal",
                        "start": 372,
                        "end": 373,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 390,
              "end": 509,
              "test": {
                "type": "BinaryExpression",
                "start": 394,
                "end": 417,
                "left": {
                  "type": "MemberExpression",
                  "start": 394,
                  "end": 404,
                  "object": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 399,
                    "name": "shape",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 404,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 409,
                  "end": 417,
                  "value": "circle",
                  "raw": "\"circle\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 419,
                "end": 509,
                "body": []
              },
              "alternate": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
