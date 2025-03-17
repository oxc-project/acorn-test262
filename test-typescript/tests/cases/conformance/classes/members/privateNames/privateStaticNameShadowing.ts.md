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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 23,
              "name": "f"
            },
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
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 28,
                  "end": 30,
                  "name": "m"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 73,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 64,
                          "name": "m"
                        },
                        "computed": false,
                        "optional": false
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
            "start": 78,
            "end": 305,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 85,
              "end": 87,
              "name": "m"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 305,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 98,
                    "end": 116,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 115,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 110,
                          "name": "X",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 105,
                            "end": 110,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 162,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 156,
                          "name": "_a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 151,
                            "end": 156,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 153,
                              "end": 156
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 205,
                          "end": 207,
                          "name": "m"
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
