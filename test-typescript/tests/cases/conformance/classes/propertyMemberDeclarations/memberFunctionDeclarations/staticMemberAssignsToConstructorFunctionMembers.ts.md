__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 230,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 60,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 60,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 37,
                    "end": 54,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 37,
                      "end": 54,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 37,
                        "end": 42,
                        "object": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 42,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 45,
                        "end": 54,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 51,
                          "end": 54,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 228,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 228,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 86,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 228,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 123,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 106,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 111,
                        "object": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 111,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 114,
                        "end": 123,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 120,
                          "end": 123,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 158,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 157,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 146,
                        "object": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 149,
                        "end": 157,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 198,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 173,
                      "end": 197,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 173,
                        "end": 178,
                        "object": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 178,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 181,
                        "end": 197,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 182,
                            "end": 191,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 191,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 185,
                                "end": 191
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 196,
                          "end": 197,
                          "value": 1,
                          "raw": "1"
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 222,
                    "argument": {
                      "type": "Literal",
                      "start": 220,
                      "end": 221,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 89,
                  "end": 95
                }
              }
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
