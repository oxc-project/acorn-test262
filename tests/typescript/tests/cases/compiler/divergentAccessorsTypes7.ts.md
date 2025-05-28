__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 618,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 497,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 497,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 36,
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
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 36,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 36,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 93,
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
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 93,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "typeParameters": null,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 76,
                                    "end": 77,
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 93,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 148,
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
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 546,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 545,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 532,
                        "decorators": [],
                        "name": "property",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 532,
                        "end": 540,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 534,
                          "end": 540
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 581,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 548,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 548,
            "end": 549,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 550,
            "end": 555,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 558,
          "end": 581,
          "expression": true,
          "async": false,
          "typeParameters": null,
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
          "body": {
            "type": "MemberExpression",
            "start": 568,
            "end": 581,
            "object": {
              "type": "Identifier",
              "start": 568,
              "end": 572,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 573,
              "end": 581,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 582,
      "end": 618,
      "expression": {
        "type": "AssignmentExpression",
        "start": 582,
        "end": 618,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 582,
          "end": 592,
          "object": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 584,
            "end": 591,
            "value": "value",
            "raw": "'value'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 595,
          "end": 618,
          "expression": true,
          "async": false,
          "typeParameters": null,
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
          "body": {
            "type": "MemberExpression",
            "start": 605,
            "end": 618,
            "object": {
              "type": "Identifier",
              "start": 605,
              "end": 609,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 610,
              "end": 618,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
