__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
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
      "end": 295,
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
        "end": 295,
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
            "end": 293,
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
              "end": 293,
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
                "end": 293,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 96,
                    "end": 224,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 108,
                      "decorators": [],
                      "name": "innver",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 109,
                      "end": 224,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 123,
                          "end": 141,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 131,
                            "end": 140,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 133,
                              "end": 140
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
                          "start": 154,
                          "end": 214,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 165,
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 165,
                            "end": 214,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 168,
                              "end": 214,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 186,
                                  "end": 200,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 186,
                                    "end": 199,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 186,
                                      "end": 192,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 186,
                                        "end": 190
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 191,
                                        "end": 192,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 195,
                                      "end": 199,
                                      "value": true,
                                      "raw": "true"
                                    }
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
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 233,
                    "end": 241,
                    "expression": {
                      "type": "CallExpression",
                      "start": 233,
                      "end": 240,
                      "callee": {
                        "type": "Super",
                        "start": 233,
                        "end": 238
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 250,
                    "end": 262,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 250,
                      "end": 261,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 250,
                        "end": 256,
                        "object": {
                          "type": "ThisExpression",
                          "start": 250,
                          "end": 254
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
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
                        "start": 259,
                        "end": 261,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 271,
                    "end": 287,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 275,
                        "end": 286,
                        "id": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 279,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 282,
                          "end": 286
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
