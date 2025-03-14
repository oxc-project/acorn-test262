__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 122,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
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
              "start": 31,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 116,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 51,
                      "end": 115,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 65,
                          "end": 80,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
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
                            "start": 72,
                            "end": 80,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 94,
                          "end": 105,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 98,
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
                            "start": 100,
                            "end": 105,
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
            "start": 128,
            "end": 176,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 129,
              "end": 144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 129,
                "end": 135,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 144,
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
              "start": 145,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 176,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 158,
                    "end": 170,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
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
        "start": 6,
        "end": 20,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 199,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 199,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 191,
                "end": 199,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 191,
                  "end": 197
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 202,
            "end": 208,
            "elements": [
              {
                "type": "Literal",
                "start": 203,
                "end": 204,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 247,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 223,
            "end": 246,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 224,
                "end": 245,
                "argument": {
                  "type": "NewExpression",
                  "start": 227,
                  "end": 245,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 245,
                    "decorators": [],
                    "name": "SymbolIterator",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 222,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 215,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 216,
            "end": 222,
            "decorators": [],
            "name": "concat",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
