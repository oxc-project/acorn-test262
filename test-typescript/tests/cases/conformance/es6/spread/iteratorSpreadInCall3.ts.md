__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
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
          "end": 27,
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
            "end": 27,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 27,
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 211,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 211,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 155,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
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
              "start": 64,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 155,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 149,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 84,
                      "end": 148,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 113,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 103,
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
                            "start": 105,
                            "end": 113,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 111,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 127,
                          "end": 138,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
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
                            "start": 133,
                            "end": 138,
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
            "start": 161,
            "end": 209,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 162,
              "end": 177,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 168,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 177,
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
              "start": 178,
              "end": 209,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 209,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 191,
                    "end": 203,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 198,
                      "end": 202
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
        "start": 39,
        "end": 53,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 240,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 239,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 217,
            "end": 238,
            "argument": {
              "type": "NewExpression",
              "start": 220,
              "end": 238,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 224,
                "end": 238,
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 216,
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
