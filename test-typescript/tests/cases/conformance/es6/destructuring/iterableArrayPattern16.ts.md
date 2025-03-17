__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 36,
          "argument": {
            "type": "ArrayPattern",
            "start": 16,
            "end": 22,
            "elements": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 36,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 24,
              "end": 36,
              "elementType": {
                "type": "TSTupleType",
                "start": 24,
                "end": 34,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 28,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 30,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 33,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "name": "fun",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 46,
            "end": 72,
            "argument": {
              "type": "NewExpression",
              "start": 49,
              "end": 72,
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 72,
                "name": "FooIteratorIterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 136,
        "name": "FooIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 237,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 237,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 160,
                    "end": 231,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 167,
                      "end": 230,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 181,
                          "end": 195,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 181,
                            "end": 186,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "NewExpression",
                            "start": 188,
                            "end": 195,
                            "callee": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 195,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 209,
                          "end": 220,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 213,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 215,
                            "end": 220,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 291,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 244,
              "end": 259,
              "object": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 259,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 291,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 273,
                    "end": 285,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 280,
                      "end": 284
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
    {
      "type": "ClassDeclaration",
      "start": 295,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 320,
        "name": "FooIteratorIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 485,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 331,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 429,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 429,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 344,
                    "end": 423,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 351,
                      "end": 422,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 365,
                          "end": 387,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 365,
                            "end": 370,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "NewExpression",
                            "start": 372,
                            "end": 387,
                            "callee": {
                              "type": "Identifier",
                              "start": 376,
                              "end": 387,
                              "name": "FooIterator",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 401,
                          "end": 412,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 401,
                            "end": 405,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 407,
                            "end": 412,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 483,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 436,
              "end": 451,
              "object": {
                "type": "Identifier",
                "start": 436,
                "end": 442,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 443,
                "end": 451,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 452,
              "end": 483,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 455,
                "end": 483,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 465,
                    "end": 477,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 472,
                      "end": 476
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
