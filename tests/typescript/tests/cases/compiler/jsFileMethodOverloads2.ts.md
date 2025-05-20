__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 89,
  "end": 703,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 703,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 703,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 190,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 153,
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
              "start": 153,
              "end": 190,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 190,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 167,
                    "end": 186,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 167,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 167,
                        "end": 177,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 185,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "type": "Identifier",
                  "start": 154,
                  "end": 159,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 389,
            "end": 438,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 400,
              "decorators": [],
              "name": "getTypeName",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 400,
              "end": 438,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 403,
                "end": 438,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 409,
                    "end": 434,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 416,
                      "end": 433,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 423,
                        "end": 433,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 433,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "typeof",
                      "prefix": true
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
            "start": 637,
            "end": 701,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 637,
              "end": 646,
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 646,
              "end": 701,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 701,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 657,
                    "end": 697,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 664,
                      "end": 696,
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 686,
                        "end": 696,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 686,
                          "end": 690
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 691,
                          "end": 696,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 669,
                        "end": 683,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 672,
                            "end": 682,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 682,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 669,
                          "end": 671,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 666,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "type": "Identifier",
                  "start": 647,
                  "end": 649,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
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
        "start": 95,
        "end": 102,
        "decorators": [],
        "name": "Example",
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
