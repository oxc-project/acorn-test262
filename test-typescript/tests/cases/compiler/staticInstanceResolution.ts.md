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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "Comment",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 45,
              "name": "getDocCommentText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 60,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 219,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 90,
              "name": "getDocCommentText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 110,
                  "name": "comments",
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
                          "name": "Comment",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "comments",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Literal",
                            "start": 135,
                            "end": 136,
                            "value": 0,
                            "raw": "0"
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 155,
                          "name": "getDocCommentText",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 182,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 171,
                        "end": 181,
                        "id": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 181,
                          "name": "c",
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
                                "name": "Comment",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 210,
                          "name": "getDocCommentText",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
