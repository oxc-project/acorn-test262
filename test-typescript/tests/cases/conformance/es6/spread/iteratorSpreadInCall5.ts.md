iteratorSpreadInCall5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 43,
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
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 38,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 38,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 38,
              "elementType": {
                "type": "TSUnionType",
                "start": 20,
                "end": 35,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 29,
                    "end": 35
                  }
                ]
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 222,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 166,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
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
              "start": 75,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 88,
                    "end": 160,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 95,
                      "end": 159,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 109,
                          "end": 124,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 114,
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
                            "start": 116,
                            "end": 124,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 138,
                          "end": 149,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 142,
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
                            "start": 144,
                            "end": 149,
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
            "start": 172,
            "end": 220,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 173,
              "end": 188,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 188,
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
              "start": 189,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 192,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 214,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 209,
                      "end": 213
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
        "start": 50,
        "end": 64,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 224,
      "end": 397,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 246,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 341,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
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
              "start": 256,
              "end": 341,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 259,
                "end": 341,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 269,
                    "end": 335,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 276,
                      "end": 334,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 290,
                          "end": 299,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 295,
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
                            "start": 297,
                            "end": 299,
                            "raw": "\"\"",
                            "value": ""
                          }
                        },
                        {
                          "type": "Property",
                          "start": 313,
                          "end": 324,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 317,
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
                            "start": 319,
                            "end": 324,
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
            "start": 347,
            "end": 395,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 348,
              "end": 363,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 363,
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
              "start": 364,
              "end": 395,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 395,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 377,
                    "end": 389,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 384,
                      "end": 388
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
        "start": 230,
        "end": 245,
        "decorators": [],
        "name": "_StringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 450,
      "expression": {
        "type": "CallExpression",
        "start": 399,
        "end": 449,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 403,
            "end": 424,
            "argument": {
              "type": "NewExpression",
              "start": 406,
              "end": 424,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 410,
                "end": 424,
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false
              }
            }
          },
          {
            "type": "SpreadElement",
            "start": 426,
            "end": 448,
            "argument": {
              "type": "NewExpression",
              "start": 429,
              "end": 448,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 433,
                "end": 448,
                "decorators": [],
                "name": "_StringIterator",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 402,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
