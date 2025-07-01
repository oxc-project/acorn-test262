__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 102
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 153
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 159
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 177
                        },
                        "optional": false,
                        "computed": false,
                        "start": 167,
                        "end": 177
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 185
                      },
                      "start": 167,
                      "end": 185
                    },
                    "directive": null,
                    "start": 167,
                    "end": 186
                  }
                ],
                "start": 161,
                "end": 190
              },
              "expression": false,
              "start": 153,
              "end": 190
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 190
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTypeName",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 400
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 433
                        },
                        "optional": false,
                        "computed": false,
                        "start": 423,
                        "end": 433
                      },
                      "prefix": true,
                      "start": 416,
                      "end": 433
                    },
                    "start": 409,
                    "end": 434
                  }
                ],
                "start": 403,
                "end": 438
              },
              "expression": false,
              "start": 400,
              "end": 438
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 389,
            "end": 438
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 646
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 649
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 666
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 669,
                          "end": 671
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 677,
                              "end": 682
                            },
                            "optional": false,
                            "computed": false,
                            "start": 672,
                            "end": 682
                          }
                        ],
                        "optional": false,
                        "start": 669,
                        "end": 683
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 686,
                          "end": 690
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 691,
                          "end": 696
                        },
                        "optional": false,
                        "computed": false,
                        "start": 686,
                        "end": 696
                      },
                      "start": 664,
                      "end": 696
                    },
                    "start": 657,
                    "end": 697
                  }
                ],
                "start": 651,
                "end": 701
              },
              "expression": false,
              "start": 646,
              "end": 701
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 637,
            "end": 701
          }
        ],
        "start": 103,
        "end": 703
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 703
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 89,
  "end": 703
}
```
