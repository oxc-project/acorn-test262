__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 47,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 47,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 47,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 45,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 80,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 80,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 76,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 170,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 170,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 156,
                    "end": 169,
                    "argument": {
                      "type": "Literal",
                      "start": 163,
                      "end": 168,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 210,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 210,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 210,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 206,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 200,
                      "end": 206
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 253,
            "end": 291,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 274,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 261,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 261,
                  "end": 274,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 263,
                    "end": 274,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 264,
                        "end": 273,
                        "argument": {
                          "type": "Literal",
                          "start": 271,
                          "end": 272,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 276,
                "end": 290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 283,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 283,
                  "end": 290,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 288,
                    "end": 290,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 284,
                      "end": 287,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 331,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 334,
            "end": 379,
            "properties": [
              {
                "type": "Property",
                "start": 335,
                "end": 355,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 342,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 342,
                  "end": 355,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 344,
                    "end": 355,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 345,
                        "end": 354,
                        "argument": {
                          "type": "Literal",
                          "start": 352,
                          "end": 353,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 357,
                "end": 378,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 364,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 364,
                  "end": 378,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 376,
                    "end": 378,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 365,
                      "end": 375,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 368,
                        "end": 375,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 369,
                          "end": 375
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
