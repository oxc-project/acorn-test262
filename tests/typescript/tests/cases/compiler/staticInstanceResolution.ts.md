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
        "name": "Comment",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 45
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
                "body": [],
                "start": 52,
                "end": 60
              },
              "expression": false,
              "start": 45,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 21,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 90
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Comment",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 108
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 108
                      },
                      "start": 101,
                      "end": 110
                    },
                    "start": 99,
                    "end": 110
                  },
                  "start": 91,
                  "end": 110
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "comments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 134
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 135,
                            "end": 136
                          },
                          "optional": false,
                          "computed": true,
                          "start": 126,
                          "end": 137
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 126,
                        "end": 155
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 126,
                      "end": 157
                    },
                    "directive": null,
                    "start": 126,
                    "end": 158
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Comment",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 174,
                                "end": 181
                              },
                              "typeArguments": null,
                              "start": 174,
                              "end": 181
                            },
                            "start": 172,
                            "end": 181
                          },
                          "start": 171,
                          "end": 181
                        },
                        "init": null,
                        "definite": false,
                        "start": 171,
                        "end": 181
                      }
                    ],
                    "declare": false,
                    "start": 167,
                    "end": 182
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 192
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 191,
                        "end": 210
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 191,
                      "end": 212
                    },
                    "directive": null,
                    "start": 191,
                    "end": 213
                  }
                ],
                "start": 116,
                "end": 219
              },
              "expression": false,
              "start": 90,
              "end": 219
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 219
          }
        ],
        "start": 14,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 221
}
```
