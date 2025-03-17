__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 18,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 16,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 11,
              "end": 16,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 14,
                "end": 16,
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
      "start": 20,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 231,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 82,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 76,
                    "expression": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 75,
                      "callee": {
                        "type": "Super",
                        "start": 68,
                        "end": 73
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
            "start": 87,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 154,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 154,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 148,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 110,
                      "end": 148,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 116,
                        "end": 148,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 130,
                            "end": 138,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 130,
                              "end": 137,
                              "object": {
                                "type": "Super",
                                "start": 130,
                                "end": 135
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 137,
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
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 229,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 229,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 223,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 182,
                      "end": 223,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 188,
                        "end": 223,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 202,
                            "end": 213,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 202,
                              "end": 212,
                              "object": {
                                "type": "Super",
                                "start": 202,
                                "end": 207
                              },
                              "property": {
                                "type": "Literal",
                                "start": 208,
                                "end": 211,
                                "value": "x",
                                "raw": "\"x\""
                              },
                              "computed": true,
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": null
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
