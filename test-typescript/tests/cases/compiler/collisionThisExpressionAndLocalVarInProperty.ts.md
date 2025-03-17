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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "class1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 152,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 146,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 51,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 53,
                    "end": 146,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 62,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 67,
                      "end": 146,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 73,
                        "end": 146,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 87,
                            "end": 101,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 91,
                                "end": 100,
                                "id": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 96,
                                  "name": "_this",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                            "kind": "var",
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
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 130,
                                  "end": 134
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
      "start": 156,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "name": "class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 332,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 186,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 219,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 213,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 212,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 208,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
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
            "type": "PropertyDefinition",
            "start": 224,
            "end": 330,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 236,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 330,
              "properties": [
                {
                  "type": "Property",
                  "start": 249,
                  "end": 324,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 258,
                    "end": 324,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 259,
                        "end": 267,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 272,
                      "end": 324,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
