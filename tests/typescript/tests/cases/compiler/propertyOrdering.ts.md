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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 16,
              "end": 27
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
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 35,
                      "end": 41
                    },
                    "start": 33,
                    "end": 41
                  },
                  "start": 28,
                  "end": 41
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 43,
                "end": 46
              },
              "expression": false,
              "start": 27,
              "end": 46
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 98
                        },
                        "optional": false,
                        "computed": false,
                        "start": 87,
                        "end": 98
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 105
                      },
                      "optional": false,
                      "computed": false,
                      "start": 87,
                      "end": 105
                    },
                    "start": 80,
                    "end": 106
                  }
                ],
                "start": 66,
                "end": 141
              },
              "expression": false,
              "start": 63,
              "end": 141
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 53,
            "end": 141
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "store",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 169
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 148,
            "end": 170
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 237
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 249,
                        "end": 253
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 259
                      },
                      "optional": false,
                      "computed": false,
                      "start": 249,
                      "end": 259
                    },
                    "start": 242,
                    "end": 260
                  }
                ],
                "start": 240,
                "end": 262
              },
              "expression": false,
              "start": 237,
              "end": 262
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 227,
            "end": 262
          }
        ],
        "start": 10,
        "end": 287
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 287
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 298
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 317
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 342,
                        "end": 353
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 360
                      },
                      "optional": false,
                      "computed": false,
                      "start": 342,
                      "end": 360
                    },
                    "start": 335,
                    "end": 361
                  }
                ],
                "start": 320,
                "end": 397
              },
              "expression": false,
              "start": 317,
              "end": 397
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 307,
            "end": 397
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 413
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
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 421,
                      "end": 427
                    },
                    "start": 419,
                    "end": 427
                  },
                  "start": 414,
                  "end": 427
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
                          "start": 439,
                          "end": 443
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 450
                        },
                        "optional": false,
                        "computed": false,
                        "start": 439,
                        "end": 450
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 458
                      },
                      "start": 439,
                      "end": 458
                    },
                    "directive": null,
                    "start": 439,
                    "end": 459
                  }
                ],
                "start": 429,
                "end": 465
              },
              "expression": false,
              "start": 413,
              "end": 465
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 402,
            "end": 465
          }
        ],
        "start": 299,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 289,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 467
}
```
