__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 511,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "sideLength",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "wat",
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
          "start": 113,
          "end": 125,
          "decorators": [],
          "name": "shape",
          "optional": false,
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
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 172,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 177,
                    "end": 185,
                    "value": "circle",
                    "raw": "\"circle\""
                  }
                },
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
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 213,
                          "decorators": [],
                          "name": "PI",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 228,
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 243,
                "end": 272,
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
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 258,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 263,
                    "end": 271,
                    "value": "circle",
                    "raw": "\"circle\""
                  }
                },
                "consequent": []
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
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 314,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 353,
                        "decorators": [],
                        "name": "PI",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 368,
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 404,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
