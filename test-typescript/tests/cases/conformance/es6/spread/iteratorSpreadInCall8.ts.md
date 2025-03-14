iteratorSpreadInCall8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 459,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 45,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 45,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 31,
                  "end": 40,
                  "argument": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 37,
                      "end": 40,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 37,
                        "end": 38,
                        "typeName": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "ClassDeclaration",
      "start": 49,
      "end": 227,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 171,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
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
              "start": 80,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 93,
                    "end": 165,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 100,
                      "end": 164,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 114,
                          "end": 129,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 119,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 121,
                            "end": 129,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 127,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 143,
                          "end": 154,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 147,
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
                            "start": 149,
                            "end": 154,
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
            "start": 177,
            "end": 225,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 178,
              "end": 193,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 184,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 193,
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
              "start": 194,
              "end": 225,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 225,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
        "start": 55,
        "end": 69,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 229,
      "end": 402,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 251,
        "end": 402,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 346,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 261,
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
              "start": 261,
              "end": 346,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 346,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 274,
                    "end": 340,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 281,
                      "end": 339,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 295,
                          "end": 304,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 295,
                            "end": 300,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 302,
                            "end": 304,
                            "raw": "\"\"",
                            "value": ""
                          }
                        },
                        {
                          "type": "Property",
                          "start": 318,
                          "end": 329,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 322,
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
                            "start": 324,
                            "end": 329,
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
            "start": 352,
            "end": 400,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 353,
              "end": 368,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 359,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 360,
                "end": 368,
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
              "start": 369,
              "end": 400,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 372,
                "end": 400,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 382,
                    "end": 394,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 389,
                      "end": 393
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
        "start": 235,
        "end": 250,
        "decorators": [],
        "name": "_StringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 459,
      "expression": {
        "type": "NewExpression",
        "start": 404,
        "end": 458,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 412,
            "end": 433,
            "argument": {
              "type": "NewExpression",
              "start": 415,
              "end": 433,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 419,
                "end": 433,
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false
              }
            }
          },
          {
            "type": "SpreadElement",
            "start": 435,
            "end": 457,
            "argument": {
              "type": "NewExpression",
              "start": 438,
              "end": 457,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 442,
                "end": 457,
                "decorators": [],
                "name": "_StringIterator",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 411,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
