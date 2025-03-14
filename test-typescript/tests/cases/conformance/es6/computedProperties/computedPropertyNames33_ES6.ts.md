__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 31,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 29,
            "argument": {
              "type": "Literal",
              "start": 27,
              "end": 29,
              "raw": "''",
              "value": ""
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
      "params": [],
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
      "start": 32,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 142,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 140,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 65,
                    "end": 116,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 69,
                        "end": 115,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 72,
                          "decorators": [],
                          "name": "obj",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 75,
                          "end": 115,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 89,
                              "end": 105,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 90,
                                "end": 98,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 90,
                                  "end": 93,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false
                                },
                                "optional": false,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 93,
                                  "end": 96,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 94,
                                      "end": 95,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 94,
                                        "end": 95,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  ]
                                }
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 99,
                                "end": 105,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 102,
                                  "end": 105,
                                  "body": []
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": []
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
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 134,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 133,
                      "raw": "0",
                      "value": 0
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
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
