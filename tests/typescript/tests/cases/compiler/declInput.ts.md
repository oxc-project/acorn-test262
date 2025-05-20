__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 59,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 59,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 59,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 57,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 125,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 125,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 125,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 123,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 82,
                      "end": 122,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 95,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSTypeAssertion",
                            "start": 86,
                            "end": 95,
                            "expression": {
                              "type": "Literal",
                              "start": 91,
                              "end": 95,
                              "raw": "null",
                              "value": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 87,
                              "end": 90,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 90,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 97,
                          "end": 109,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 111,
                          "end": 120,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "UnaryExpression",
                            "start": 114,
                            "end": 120,
                            "argument": {
                              "type": "Literal",
                              "start": 119,
                              "end": 120,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 170,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 164,
                    "end": 168,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 164,
                      "end": 167,
                      "argument": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 137,
                  "end": 142,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 141,
                    "end": 142,
                    "raw": "4",
                    "value": 4
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 144,
                  "end": 152,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 148,
                    "end": 152,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 154,
                  "end": 160,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 158,
                    "end": 160,
                    "raw": "''",
                    "value": ""
                  },
                  "typeAnnotation": null
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
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
