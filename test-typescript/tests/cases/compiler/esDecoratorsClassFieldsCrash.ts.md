__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 676,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 68,
            "end": 159,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 78,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 72,
                    "end": 78
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 80,
                "end": 89,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 100,
                "name": "z",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 100,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 94,
                    "end": 100
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 102,
                "end": 111,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 116,
              "end": 159,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 123,
                  "name": "_",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 120,
                      "end": 123
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 146,
                  "name": "ctx",
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
                        "name": "DecoratorContext",
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
                "start": 156,
                "end": 159,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 147,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 149,
                  "end": 152
                }
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 675,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 173,
            "end": 675,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 179,
              "end": 675,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 185,
                  "end": 218,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "name": "field",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 223,
                  "end": 263,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 252,
                    "name": "field",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
                },
                {
                  "type": "AccessorProperty",
                  "start": 268,
                  "end": 313,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 302,
                    "name": "accessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "definite": false,
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
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "override": false,
                  "readonly": false
                },
                {
                  "type": "AccessorProperty",
                  "start": 318,
                  "end": 370,
                  "key": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 359,
                    "name": "accessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "definite": false,
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
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "override": false,
                  "readonly": false
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
