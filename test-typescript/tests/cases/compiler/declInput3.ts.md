__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 19,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "bar2",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 60,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 60,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 55,
                      "end": 57,
                      "raw": "''",
                      "value": ""
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
            "start": 63,
            "end": 126,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 126,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 124,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 83,
                      "end": 123,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 84,
                          "end": 96,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSTypeAssertion",
                            "start": 87,
                            "end": 96,
                            "expression": {
                              "type": "Literal",
                              "start": 92,
                              "end": 96,
                              "raw": "null",
                              "value": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 88,
                              "end": 91,
                              "typeName": {
                                "type": "Identifier",
                                "start": 88,
                                "end": 91,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 110,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 112,
                          "end": 121,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "UnaryExpression",
                            "start": 115,
                            "end": 121,
                            "argument": {
                              "type": "Literal",
                              "start": 120,
                              "end": 121,
                              "raw": "4",
                              "value": 4
                            },
                            "operator": "void",
                            "prefix": true
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
            "start": 129,
            "end": 171,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 169,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 165,
                      "end": 168,
                      "argument": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 138,
                  "end": 143,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 142,
                    "end": 143,
                    "raw": "4",
                    "value": 4
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 145,
                  "end": 153,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 153,
                    "raw": "null",
                    "value": null
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 155,
                  "end": 161,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 159,
                    "end": 161,
                    "raw": "''",
                    "value": ""
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
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
