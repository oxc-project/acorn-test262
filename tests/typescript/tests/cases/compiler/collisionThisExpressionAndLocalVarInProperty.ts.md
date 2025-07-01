__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 31
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 51
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 62
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 91,
                                  "end": 96
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 99,
                                  "end": 100
                                },
                                "definite": false,
                                "start": 91,
                                "end": 100
                              }
                            ],
                            "declare": false,
                            "start": 87,
                            "end": 101
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 129
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 130,
                                  "end": 134
                                }
                              ],
                              "optional": false,
                              "start": 121,
                              "end": 135
                            },
                            "start": 114,
                            "end": 136
                          }
                        ],
                        "start": 73,
                        "end": 146
                      },
                      "id": null,
                      "generator": false,
                      "start": 67,
                      "end": 146
                    },
                    "id": null,
                    "generator": false,
                    "start": 53,
                    "end": 146
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 44,
                  "end": 146
                }
              ],
              "start": 34,
              "end": 152
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 19,
            "end": 152
          }
        ],
        "start": 13,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 154
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 168
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 186
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 208
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 211,
                          "end": 212
                        },
                        "definite": false,
                        "start": 203,
                        "end": 212
                      }
                    ],
                    "declare": false,
                    "start": 199,
                    "end": 213
                  }
                ],
                "start": 189,
                "end": 219
              },
              "expression": false,
              "start": 186,
              "end": 219
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 175,
            "end": 219
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 236
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 256
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 267
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 299,
                                "end": 307
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                }
                              ],
                              "optional": false,
                              "start": 299,
                              "end": 313
                            },
                            "start": 292,
                            "end": 314
                          }
                        ],
                        "start": 278,
                        "end": 324
                      },
                      "id": null,
                      "generator": false,
                      "start": 272,
                      "end": 324
                    },
                    "id": null,
                    "generator": false,
                    "start": 258,
                    "end": 324
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 249,
                  "end": 324
                }
              ],
              "start": 239,
              "end": 330
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 224,
            "end": 330
          }
        ],
        "start": 169,
        "end": 332
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 332
}
```
