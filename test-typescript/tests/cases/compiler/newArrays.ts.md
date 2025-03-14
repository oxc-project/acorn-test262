__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 165,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 165,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 12,
            "end": 24,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 22,
              "end": 24,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 163,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 36,
              "end": 163,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 57,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 49,
                    "decorators": [],
                    "name": "fa",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 51,
                      "end": 56,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 51,
                        "end": 54,
                        "typeName": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 54,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 60,
                  "end": 74,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "start": 71,
                    "end": 73,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 77,
                  "end": 91,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 90,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 95,
                  "end": 160,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
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
                    "start": 104,
                    "end": 160,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 160,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 112,
                          "end": 154,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 112,
                            "end": 153,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 112,
                              "end": 119,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 112,
                                "end": 116
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 119,
                                "decorators": [],
                                "name": "fa",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 122,
                              "end": 153,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 137,
                                  "end": 152,
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 137,
                                    "end": 143,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 137,
                                      "end": 141
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 142,
                                      "end": 143,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 146,
                                    "end": 152,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 146,
                                      "end": 150
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 151,
                                      "end": 152,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 126,
                                "end": 131,
                                "decorators": [],
                                "name": "Array",
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 131,
                                "end": 136,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 132,
                                    "end": 135,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 132,
                                      "end": 135,
                                      "decorators": [],
                                      "name": "Foo",
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
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "Gar",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
