__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 618,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 317,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 72,
        "decorators": [],
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 317,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 262,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
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
                "start": 93,
                "end": 262,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 103,
                    "end": 121,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 103,
                      "end": 120,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 103,
                        "end": 113,
                        "object": {
                          "type": "ThisExpression",
                          "start": 103,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 113,
                          "decorators": [],
                          "name": "roots",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 116,
                        "end": 120,
                        "value": "hi",
                        "raw": "\"hi\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 172,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 158,
                      "end": 171,
                      "object": {
                        "type": "ThisExpression",
                        "start": 158,
                        "end": 162
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 171,
                        "decorators": [],
                        "name": "justProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 209,
                    "end": 238,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 209,
                      "end": 237,
                      "object": {
                        "type": "ThisExpression",
                        "start": 209,
                        "end": 213
                      },
                      "property": {
                        "type": "Literal",
                        "start": 214,
                        "end": 236,
                        "value": "literalElementAccess",
                        "raw": "'literalElementAccess'"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 248,
                    "end": 256,
                    "expression": {
                      "type": "CallExpression",
                      "start": 248,
                      "end": 256,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 248,
                        "end": 254,
                        "object": {
                          "type": "ThisExpression",
                          "start": 248,
                          "end": 252
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 253,
                          "end": 254,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "type": "AccessorProperty",
            "start": 267,
            "end": 315,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 280,
              "end": 315,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 315,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 309,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 309,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 296,
                        "end": 304,
                        "object": {
                          "type": "ThisExpression",
                          "start": 296,
                          "end": 300
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 304,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 307,
                        "end": 309,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 319,
      "end": 618,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 337,
        "decorators": [],
        "name": "DerivedYadda",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 346,
        "end": 355,
        "decorators": [],
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 618,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 413,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 375,
              "decorators": [],
              "name": "rootTests",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 375,
              "end": 413,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 378,
                "end": 413,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 388,
                    "end": 407,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 395,
                      "end": 406,
                      "object": {
                        "type": "Super",
                        "start": 395,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 406,
                        "decorators": [],
                        "name": "roots",
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
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 466,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 430,
              "decorators": [],
              "name": "fooTests",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 466,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 433,
                "end": 466,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 443,
                    "end": 460,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 450,
                      "end": 459,
                      "object": {
                        "type": "Super",
                        "start": 450,
                        "end": 455
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 459,
                        "decorators": [],
                        "name": "foo",
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
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 471,
            "end": 529,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 488,
              "decorators": [],
              "name": "justPropTests",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 488,
              "end": 529,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 491,
                "end": 529,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 501,
                    "end": 523,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 508,
                      "end": 522,
                      "object": {
                        "type": "Super",
                        "start": 508,
                        "end": 513
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 522,
                        "decorators": [],
                        "name": "justProp",
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
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 534,
            "end": 616,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 563,
              "decorators": [],
              "name": "literalElementAccessTests",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 563,
              "end": 616,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 566,
                "end": 616,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 576,
                    "end": 610,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 583,
                      "end": 609,
                      "object": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 609,
                        "decorators": [],
                        "name": "literalElementAccess",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
