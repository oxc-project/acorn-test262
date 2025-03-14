__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 42,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 29,
            "end": 40,
            "argument": {
              "type": "MemberExpression",
              "start": 36,
              "end": 40,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
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
          "start": 16,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 22,
              "end": 25,
              "elementType": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 23,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 43,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 165,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
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
              "start": 74,
              "end": 165,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 165,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 159,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 94,
                      "end": 158,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 108,
                          "end": 123,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 113,
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
                            "start": 115,
                            "end": 123,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 115,
                              "end": 121,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 137,
                          "end": 148,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 141,
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
                            "start": 143,
                            "end": 148,
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
            "start": 171,
            "end": 219,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 172,
              "end": 187,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 172,
                "end": 178,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 187,
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
              "start": 188,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 219,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 201,
                    "end": 213,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 208,
                      "end": 212
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
        "start": 49,
        "end": 63,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 250,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 249,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 227,
            "end": 248,
            "argument": {
              "type": "NewExpression",
              "start": 230,
              "end": 248,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 234,
                "end": 248,
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 226,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
