__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 302,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 302,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 43,
              "end": 47
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
            "start": 54,
            "end": 225,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 225,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 225,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 72,
                    "end": 79,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 72,
                      "end": 78,
                      "object": {
                        "type": "ThisExpression",
                        "start": 72,
                        "end": 76
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 135,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 118,
                        "end": 134,
                        "id": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 122,
                          "end": 134,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "start": 128,
                            "end": 134,
                            "object": {
                              "type": "ThisExpression",
                              "start": 128,
                              "end": 132
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 183,
                    "end": 198,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 187,
                        "end": 197,
                        "id": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 188,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 191,
                          "end": 197,
                          "object": {
                            "type": "ThisExpression",
                            "start": 191,
                            "end": 195
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 197,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
          },
          {
            "type": "MethodDefinition",
            "start": 231,
            "end": 300,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 242,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 242,
              "end": 300,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 245,
                "end": 300,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 255,
                    "end": 270,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 259,
                        "end": 269,
                        "id": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 263,
                          "end": 269,
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 269,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 279,
                    "end": 294,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 283,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 293,
                          "object": {
                            "type": "ThisExpression",
                            "start": 287,
                            "end": 291
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 293,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
