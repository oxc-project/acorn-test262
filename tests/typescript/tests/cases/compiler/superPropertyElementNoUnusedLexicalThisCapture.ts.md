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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 18,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 16,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 11,
              "end": 16,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 14,
                "end": 16,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 231,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 231,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 82,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 82,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
            "type": "MethodDefinition",
            "start": 87,
            "end": 154,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 154,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
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
            "start": 159,
            "end": 229,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 229,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "optional": false,
                              "computed": true
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
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
