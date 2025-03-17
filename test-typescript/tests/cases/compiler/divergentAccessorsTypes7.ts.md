__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 619,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 497,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 497,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 36,
                "body": []
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
            "start": 42,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 93,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 89,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 59,
                      "end": 89,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 59,
                          "end": 65
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 69,
                          "end": 88,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 70,
                              "end": 77,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 74,
                                "end": 77,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 76,
                                  "end": 77,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 76,
                                    "end": 77,
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 79,
                            "end": 88,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 82,
                              "end": 88
                            }
                          },
                          "typeParameters": null
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 108,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 142,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 136,
                      "end": 141,
                      "expression": {
                        "type": "Literal",
                        "start": 136,
                        "end": 140,
                        "raw": "null",
                        "value": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 112,
                  "end": 118
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 509,
            "end": 545,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 513,
              "end": 517,
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 517,
              "end": 543,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 518,
                  "end": 542,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 524,
                      "end": 540,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 532,
                        "decorators": [],
                        "name": "property",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 532,
                        "end": 540,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 534,
                          "end": 540
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 581,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 548,
          "end": 555,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 548,
            "end": 549,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 550,
            "end": 555,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 558,
          "end": 581,
          "async": false,
          "body": {
            "type": "MemberExpression",
            "start": 568,
            "end": 581,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 568,
              "end": 572,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 573,
              "end": 581,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 559,
              "end": 563,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 582,
      "end": 618,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 582,
        "end": 618,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 582,
          "end": 592,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 584,
            "end": 591,
            "raw": "'value'",
            "value": "value"
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 595,
          "end": 618,
          "async": false,
          "body": {
            "type": "MemberExpression",
            "start": 605,
            "end": 618,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 605,
              "end": 609,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 610,
              "end": 618,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 596,
              "end": 600,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
