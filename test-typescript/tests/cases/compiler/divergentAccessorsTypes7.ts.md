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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 497,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 36,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 36,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 89,
                  "name": "value",
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
                              "name": "item",
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
                                    "name": "S",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 93,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 108,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 112,
                  "end": 118
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 509,
            "end": 545,
            "callee": {
              "type": "Identifier",
              "start": 513,
              "end": 517,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
                        "name": "property",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 550,
            "end": 555,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 558,
          "end": 581,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 559,
              "end": 563,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "MemberExpression",
            "start": 568,
            "end": 581,
            "object": {
              "type": "Identifier",
              "start": 568,
              "end": 572,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 573,
              "end": 581,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 584,
            "end": 591,
            "value": "value",
            "raw": "'value'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 595,
          "end": 618,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 596,
              "end": 600,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "MemberExpression",
            "start": 605,
            "end": 618,
            "object": {
              "type": "Identifier",
              "start": 605,
              "end": 609,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 610,
              "end": 618,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
