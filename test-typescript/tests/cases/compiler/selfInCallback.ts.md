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
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 11,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 42,
              "name": "callback",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 63,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 54,
                  "name": "cb",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "cb",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "name": "doit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 117,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "callback",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 97,
                          "end": 112,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                      "name": "p1",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
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
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
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
            "accessibility": "public"
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
