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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 302,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
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
            "type": "PropertyDefinition",
            "start": 32,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 43,
              "end": 47
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
            "start": 54,
            "end": 225,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 225,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 135,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 118,
                        "end": 134,
                        "id": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 122,
                          "end": 134,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 183,
                    "end": 198,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 187,
                        "end": 197,
                        "id": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 188,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
            "start": 231,
            "end": 300,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 242,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 242,
              "end": 300,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 245,
                "end": 300,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 255,
                    "end": 270,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 259,
                        "end": 269,
                        "id": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 279,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 283,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
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
