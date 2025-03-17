__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 468,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 287,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 287,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
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
              "start": 27,
              "end": 46,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 41,
                  "decorators": [],
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 35,
                      "end": 41
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
            "start": 53,
            "end": 141,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 141,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 80,
                    "end": 106,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 87,
                      "end": 105,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 87,
                        "end": 98,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 98,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 105,
                        "decorators": [],
                        "name": "length",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 170,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 164,
              "end": 169,
              "decorators": [],
              "name": "store",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 262,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 262,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 262,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 242,
                    "end": 260,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 249,
                      "end": 259,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 249,
                        "end": 253
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 259,
                        "decorators": [],
                        "name": "store",
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
              "params": [],
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 467,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 299,
        "end": 467,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 397,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 317,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 317,
              "end": 397,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 397,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 335,
                    "end": 361,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 342,
                      "end": 360,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 342,
                        "end": 353,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 353,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 360,
                        "decorators": [],
                        "name": "length",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 465,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 413,
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
              "start": 413,
              "end": 465,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 465,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 439,
                    "end": 459,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 439,
                      "end": 458,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 439,
                        "end": 450,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 439,
                          "end": 443
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 450,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 458,
                        "decorators": [],
                        "name": "store",
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
                  "start": 414,
                  "end": 427,
                  "decorators": [],
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 419,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 421,
                      "end": 427
                    }
                  }
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
        "start": 295,
        "end": 298,
        "decorators": [],
        "name": "Bar",
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
