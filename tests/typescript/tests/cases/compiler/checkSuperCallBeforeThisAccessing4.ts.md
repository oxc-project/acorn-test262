__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 355,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 29,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 38,
        "end": 43,
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 355,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            },
            "value": null,
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
            "start": 72,
            "end": 353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 83,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 353,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 353,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 147,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 97,
                      "end": 145,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 103,
                        "end": 145,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 117,
                            "end": 122,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 117,
                              "end": 121
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 205,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 156,
                      "end": 204,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 162,
                        "end": 204,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 176,
                            "end": 181,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 176,
                              "end": 180
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 214,
                    "end": 267,
                    "expression": {
                      "type": "CallExpression",
                      "start": 214,
                      "end": 266,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 215,
                        "end": 263,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 221,
                          "end": 263,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 235,
                              "end": 240,
                              "expression": {
                                "type": "ThisExpression",
                                "start": 235,
                                "end": 239
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 276,
                    "end": 284,
                    "expression": {
                      "type": "CallExpression",
                      "start": 276,
                      "end": 283,
                      "callee": {
                        "type": "Super",
                        "start": 276,
                        "end": 281
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 301,
                    "expression": {
                      "type": "CallExpression",
                      "start": 293,
                      "end": 300,
                      "callee": {
                        "type": "Super",
                        "start": 293,
                        "end": 298
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 322,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 310,
                      "end": 321,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 310,
                        "end": 316,
                        "object": {
                          "type": "ThisExpression",
                          "start": 310,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 319,
                        "end": 321,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 331,
                    "end": 347,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 335,
                        "end": 346,
                        "id": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 339,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
