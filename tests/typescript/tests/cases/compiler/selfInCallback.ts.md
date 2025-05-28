__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 119,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 11,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 0,
              "raw": "0"
            },
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
            "start": 27,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 42,
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 63,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 54,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 46,
                      "end": 54,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 54,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 50,
                          "end": 54
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 63,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 62,
                    "expression": {
                      "type": "CallExpression",
                      "start": 57,
                      "end": 61,
                      "callee": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 59,
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": null
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "doit",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 117,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 117,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 114,
                    "expression": {
                      "type": "CallExpression",
                      "start": 83,
                      "end": 113,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 83,
                        "end": 96,
                        "object": {
                          "type": "ThisExpression",
                          "start": 83,
                          "end": 87
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 96,
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 97,
                          "end": 112,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 101,
                            "end": 112,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 102,
                                "end": 111,
                                "expression": {
                                  "type": "BinaryExpression",
                                  "start": 102,
                                  "end": 111,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 102,
                                    "end": 109,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 102,
                                      "end": 106
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 107,
                                      "end": 109,
                                      "decorators": [],
                                      "name": "p1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "start": 110,
                                    "end": 111,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
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
