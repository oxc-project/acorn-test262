__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 384,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 99,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 30,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 30,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 75,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 97,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 97,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 384,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 193,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 160,
                    "expression": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 159,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 157,
                        "object": {
                          "type": "Super",
                          "start": 148,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 177,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 169,
                      "end": 176,
                      "object": {
                        "type": "Super",
                        "start": 169,
                        "end": 174
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 289,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 214,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 214,
              "end": 289,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 289,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 227,
                    "end": 235,
                    "expression": {
                      "type": "CallExpression",
                      "start": 227,
                      "end": 234,
                      "callee": {
                        "type": "Super",
                        "start": 227,
                        "end": 232
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 244,
                    "end": 256,
                    "expression": {
                      "type": "CallExpression",
                      "start": 244,
                      "end": 255,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 253,
                        "object": {
                          "type": "Super",
                          "start": 244,
                          "end": 249
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 253,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 265,
                    "end": 273,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 265,
                      "end": 272,
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
            "start": 295,
            "end": 382,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 307,
              "end": 382,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 382,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 332,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 331,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 329,
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 329,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 341,
                    "end": 349,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 341,
                      "end": 348,
                      "object": {
                        "type": "Super",
                        "start": 341,
                        "end": 346
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 367,
                    "end": 376,
                    "argument": {
                      "type": "Literal",
                      "start": 374,
                      "end": 375,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
