__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 377,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 40,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 14,
                "end": 40,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 20,
                    "end": 38,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 23,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 36,
                        "name": "message",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 31,
                          "end": 36,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 33,
                            "end": 36
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 375,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 71,
                    "end": 86,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 75,
                        "end": 85,
                        "id": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 80,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 83,
                          "end": 85,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 149,
                    "end": 369,
                    "id": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 163,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 166,
                      "end": 369,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 180,
                          "end": 199,
                          "expression": {
                            "type": "CallExpression",
                            "start": 180,
                            "end": 198,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 180,
                              "end": 191,
                              "object": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 187,
                                "name": "console",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 188,
                                "end": 191,
                                "name": "log",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 192,
                                "end": 197,
                                "name": "_this",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 270,
                          "end": 287,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 277,
                            "end": 286,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 277,
                                "end": 278,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ThisExpression",
                              "start": 282,
                              "end": 286
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
