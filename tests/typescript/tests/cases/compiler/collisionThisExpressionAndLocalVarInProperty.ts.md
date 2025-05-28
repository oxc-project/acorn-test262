__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 154,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "class1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 152,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 146,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 51,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 53,
                    "end": 146,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 62,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 67,
                      "end": 146,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 73,
                        "end": 146,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 87,
                            "end": 101,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 91,
                                "end": 100,
                                "id": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 96,
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 99,
                                  "end": 100,
                                  "value": 2,
                                  "raw": "2"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 114,
                            "end": 136,
                            "argument": {
                              "type": "CallExpression",
                              "start": 121,
                              "end": 135,
                              "callee": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 129,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 130,
                                  "end": 134
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 332,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 332,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 186,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 219,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 219,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 213,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 212,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 208,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 211,
                          "end": 212,
                          "value": 2,
                          "raw": "2"
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
          },
          {
            "type": "PropertyDefinition",
            "start": 224,
            "end": 330,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 236,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 330,
              "properties": [
                {
                  "type": "Property",
                  "start": 249,
                  "end": 324,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 258,
                    "end": 324,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 259,
                        "end": 267,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 272,
                      "end": 324,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 278,
                        "end": 324,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 292,
                            "end": 314,
                            "argument": {
                              "type": "CallExpression",
                              "start": 299,
                              "end": 313,
                              "callee": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 307,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
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
