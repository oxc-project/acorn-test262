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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 162,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 36,
                        "end": 138,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 50,
                            "end": 128,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 54,
                                "end": 127,
                                "id": {
                                  "type": "Identifier",
                                  "start": 54,
                                  "end": 57,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                      "kind": "init",
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
                                            "decorators": [],
                                            "name": "bar",
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
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 90,
                                        "end": 96,
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
                                          "end": 96,
                                          "body": []
                                        },
                                        "expression": false
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": true,
                                      "optional": false
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
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
