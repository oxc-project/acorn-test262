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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 703,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 190,
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
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 190,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 190,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 167,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 167,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 167,
                        "end": 177,
                        "object": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  }
                ]
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
            "start": 389,
            "end": 438,
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
            "value": {
              "type": "FunctionExpression",
              "start": 400,
              "end": 438,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "operator": "typeof",
                      "argument": {
                        "type": "MemberExpression",
                        "start": 423,
                        "end": 433,
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 433,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "prefix": true
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 637,
            "end": 701,
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
            "value": {
              "type": "FunctionExpression",
              "start": 646,
              "end": 701,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "test": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 666,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 669,
                        "end": 683,
                        "callee": {
                          "type": "Identifier",
                          "start": 669,
                          "end": 671,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 672,
                            "end": 682,
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 682,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 686,
                        "end": 696,
                        "object": {
                          "type": "ThisExpression",
                          "start": 686,
                          "end": 690
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 691,
                          "end": 696,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
