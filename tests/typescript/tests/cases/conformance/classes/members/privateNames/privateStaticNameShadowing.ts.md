__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 309,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
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
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 23,
              "name": "f"
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 26,
              "end": 32,
              "callee": {
                "type": "MemberExpression",
                "start": 26,
                "end": 30,
                "object": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 28,
                  "end": 30,
                  "name": "m"
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 73,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 73,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 73,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 60,
                    "end": 67,
                    "expression": {
                      "type": "CallExpression",
                      "start": 60,
                      "end": 66,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 60,
                        "end": 64,
                        "object": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 61,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 64,
                          "name": "m"
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
            "type": "MethodDefinition",
            "start": 78,
            "end": 305,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 85,
              "end": 87,
              "name": "m"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 305,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 98,
                    "end": 116,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 115,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 110,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 105,
                            "end": 110,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 113,
                          "end": 115,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 162,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 156,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 151,
                            "end": 156,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 153,
                              "end": 156
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 159,
                          "end": 161,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 203,
                    "end": 210,
                    "expression": {
                      "type": "CallExpression",
                      "start": 203,
                      "end": 209,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 203,
                        "end": 207,
                        "object": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 205,
                          "end": 207,
                          "name": "m"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 299,
                    "argument": {
                      "type": "Literal",
                      "start": 297,
                      "end": 298,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
