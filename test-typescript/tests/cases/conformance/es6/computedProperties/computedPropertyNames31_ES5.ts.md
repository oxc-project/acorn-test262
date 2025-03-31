__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "value": 0,
                      "raw": "0"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 229,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 227,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 203,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 94,
                      "end": 203,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 100,
                        "end": 203,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 114,
                            "end": 193,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 118,
                                "end": 192,
                                "id": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 121,
                                  "name": "obj",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 124,
                                  "end": 192,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 142,
                                      "end": 161,
                                      "method": true,
                                      "shorthand": false,
                                      "computed": true,
                                      "key": {
                                        "type": "CallExpression",
                                        "start": 143,
                                        "end": 154,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 143,
                                          "end": 152,
                                          "object": {
                                            "type": "Super",
                                            "start": 143,
                                            "end": 148
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 149,
                                            "end": 152,
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
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 155,
                                        "end": 161,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 158,
                                          "end": 161,
                                          "body": []
                                        },
                                        "declare": false,
                                        "typeParameters": null,
                                        "returnType": null
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 212,
                    "end": 221,
                    "argument": {
                      "type": "Literal",
                      "start": 219,
                      "end": 220,
                      "value": 0,
                      "raw": "0"
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
