__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 164,
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
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 162,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 30,
                    "end": 138,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 30,
                      "end": 138,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 36,
                        "end": 138,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 50,
                            "end": 128,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 54,
                                "end": 127,
                                "id": {
                                  "type": "Identifier",
                                  "start": 54,
                                  "end": 57,
                                  "name": "obj",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 60,
                                  "end": 127,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 78,
                                      "end": 96,
                                      "method": true,
                                      "shorthand": false,
                                      "computed": true,
                                      "key": {
                                        "type": "CallExpression",
                                        "start": 79,
                                        "end": 89,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 79,
                                          "end": 87,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 79,
                                            "end": 83
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 84,
                                            "end": 87,
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
                                        "start": 90,
                                        "end": 96,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 93,
                                          "end": 96,
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
                    "start": 147,
                    "end": 156,
                    "argument": {
                      "type": "Literal",
                      "start": 154,
                      "end": 155,
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
