__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Comment",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 45,
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 60,
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
                "end": 60,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 90,
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 219,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 110,
                  "decorators": [],
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 101,
                      "end": 110,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 108,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 108,
                          "decorators": [],
                          "name": "Comment",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 219,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 158,
                    "expression": {
                      "type": "CallExpression",
                      "start": 126,
                      "end": 157,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 155,
                        "object": {
                          "type": "MemberExpression",
                          "start": 126,
                          "end": 137,
                          "object": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 134,
                            "decorators": [],
                            "name": "comments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 135,
                            "end": 136,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 155,
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null
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
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 182,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 171,
                        "end": 181,
                        "id": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 181,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 181,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 174,
                              "end": 181,
                              "typeName": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 181,
                                "decorators": [],
                                "name": "Comment",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 213,
                    "expression": {
                      "type": "CallExpression",
                      "start": 191,
                      "end": 212,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 191,
                        "end": 210,
                        "object": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 210,
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null
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
