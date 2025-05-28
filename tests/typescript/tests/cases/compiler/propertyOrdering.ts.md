__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 467,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 287,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 287,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 46,
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
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
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
            "start": 53,
            "end": 141,
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
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "MemberExpression",
                        "start": 87,
                        "end": 98,
                        "object": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 98,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 105,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 170,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 164,
              "end": 169,
              "decorators": [],
              "name": "store",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 262,
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
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 262,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 249,
                        "end": 253
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 259,
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 467,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 299,
        "end": 467,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 397,
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
            "value": {
              "type": "FunctionExpression",
              "start": 317,
              "end": 397,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "MemberExpression",
                        "start": 342,
                        "end": 353,
                        "object": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 353,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 360,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 465,
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
            "value": {
              "type": "FunctionExpression",
              "start": 413,
              "end": 465,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 465,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 439,
                    "end": 459,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 439,
                      "end": 458,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 439,
                        "end": 450,
                        "object": {
                          "type": "ThisExpression",
                          "start": 439,
                          "end": 443
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 450,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
