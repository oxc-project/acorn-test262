iterableArrayPattern16.ts
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 36,
          "argument": {
            "type": "ArrayPattern",
            "start": 16,
            "end": 22,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "optional": false
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
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 30,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 33,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 73,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 46,
            "end": 72,
            "argument": {
              "type": "NewExpression",
              "start": 49,
              "end": 72,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 72,
                "decorators": [],
                "name": "FooIteratorIterator",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "fun",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 88,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 116,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 237,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 237,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 181,
                            "end": 186,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 188,
                            "end": 195,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 195,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 209,
                          "end": 220,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 213,
                            "decorators": [],
                            "name": "done",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 215,
                            "end": 220,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 291,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 244,
              "end": 259,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 259,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 291,
              "async": false,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 136,
        "decorators": [],
        "name": "FooIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 295,
      "end": 485,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 485,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 429,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 331,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 429,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 365,
                            "end": 370,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 372,
                            "end": 387,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 376,
                              "end": 387,
                              "decorators": [],
                              "name": "FooIterator",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 401,
                          "end": 412,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 401,
                            "end": 405,
                            "decorators": [],
                            "name": "done",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 407,
                            "end": 412,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 483,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 436,
              "end": 451,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 436,
                "end": 442,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 443,
                "end": 451,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 452,
              "end": 483,
              "async": false,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 320,
        "decorators": [],
        "name": "FooIteratorIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
