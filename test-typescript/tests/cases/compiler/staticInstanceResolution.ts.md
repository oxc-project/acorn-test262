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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 60,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 45,
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 219,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 90,
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 219,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 155,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 126,
                          "end": 137,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 134,
                            "decorators": [],
                            "name": "comments",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 135,
                            "end": 136,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 155,
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
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
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 213,
                    "expression": {
                      "type": "CallExpression",
                      "start": 191,
                      "end": 212,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 191,
                        "end": 210,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 210,
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Comment",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
