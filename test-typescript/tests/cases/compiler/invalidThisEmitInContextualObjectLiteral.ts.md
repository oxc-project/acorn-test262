__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 41,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 40,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 22,
                "end": 40,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 23,
                    "end": 31,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 31,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 25,
                        "end": 31
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 40,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 36,
                    "end": 40
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 45,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 71,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 71,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 53,
                    "end": 71,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 68,
                        "end": 71
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IDef",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 210,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 123,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 123,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 118,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 114,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 118,
                        "decorators": [],
                        "name": "IDef",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 208,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 136,
              "end": 207,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 143,
                  "end": 206,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 147,
                      "end": 159,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 149,
                        "decorators": [],
                        "name": "p1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 151,
                        "end": 159,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 156,
                          "end": 159,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "e",
                            "optional": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 163,
                      "end": 202,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 165,
                        "decorators": [],
                        "name": "p2",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 167,
                        "end": 202,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 173,
                          "end": 202,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 175,
                              "end": 200,
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "start": 182,
                                "end": 199,
                                "async": false,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 195,
                                  "end": 199
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 182,
                                    "end": 191,
                                    "decorators": [],
                                    "name": "vvvvvvvvv",
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 142,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 136,
                  "end": 140
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 96,
        "decorators": [],
        "name": "TestController",
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
