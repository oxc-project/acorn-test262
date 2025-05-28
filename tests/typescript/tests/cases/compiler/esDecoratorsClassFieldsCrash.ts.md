__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 675,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 160,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 68,
            "end": 159,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 72,
                    "end": 78
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 80,
                "end": 89,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 100,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 100,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 94,
                    "end": 100
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 102,
                "end": 111,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 116,
              "end": 159,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 123,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 120,
                      "end": 123
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 146,
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 146,
                        "decorators": [],
                        "name": "DecoratorContext",
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
                "start": 147,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 149,
                  "end": 152
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 159,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 675,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 675,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 173,
            "end": 675,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 179,
              "end": 675,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 185,
                  "end": 218,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 185,
                      "end": 201,
                      "expression": {
                        "type": "CallExpression",
                        "start": 186,
                        "end": 201,
                        "callee": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 189,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 190,
                            "end": 191,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 193,
                            "end": 194,
                            "value": 3,
                            "raw": "3"
                          },
                          {
                            "type": "Literal",
                            "start": 196,
                            "end": 197,
                            "value": 3,
                            "raw": "3"
                          },
                          {
                            "type": "Literal",
                            "start": 199,
                            "end": 200,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 209,
                      "end": 218
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 223,
                  "end": 263,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 223,
                      "end": 239,
                      "expression": {
                        "type": "CallExpression",
                        "start": 224,
                        "end": 239,
                        "callee": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 227,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 228,
                            "end": 229,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 231,
                            "end": 232,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 234,
                            "end": 235,
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "Literal",
                            "start": 237,
                            "end": 238,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 252,
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 263,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 254,
                      "end": 263
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "AccessorProperty",
                  "start": 268,
                  "end": 313,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 268,
                      "end": 284,
                      "expression": {
                        "type": "CallExpression",
                        "start": 269,
                        "end": 284,
                        "callee": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 272,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 273,
                            "end": 274,
                            "value": 3,
                            "raw": "3"
                          },
                          {
                            "type": "Literal",
                            "start": 276,
                            "end": 277,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 279,
                            "end": 280,
                            "value": 4,
                            "raw": "4"
                          },
                          {
                            "type": "Literal",
                            "start": 282,
                            "end": 283,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 302,
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 304,
                      "end": 313
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false
                },
                {
                  "type": "AccessorProperty",
                  "start": 318,
                  "end": 370,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 318,
                      "end": 334,
                      "expression": {
                        "type": "CallExpression",
                        "start": 319,
                        "end": 334,
                        "callee": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 322,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 323,
                            "end": 324,
                            "value": 4,
                            "raw": "4"
                          },
                          {
                            "type": "Literal",
                            "start": 326,
                            "end": 327,
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "Literal",
                            "start": 329,
                            "end": 330,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 332,
                            "end": 333,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 359,
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 361,
                      "end": 370
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
