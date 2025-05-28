__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 297,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "TestFile",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
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
            "type": "PropertyDefinition",
            "start": 49,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
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
            "start": 74,
            "end": 295,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 85,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 295,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 101,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 295,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 252,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 251,
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 223,
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 226,
                          "end": 251,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 232,
                            "end": 251,
                            "left": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 239,
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 242,
                              "end": 251,
                              "object": {
                                "type": "ThisExpression",
                                "start": 242,
                                "end": 246
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 247,
                                "end": 251,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
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
                    "type": "ExpressionStatement",
                    "start": 261,
                    "end": 289,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 261,
                      "end": 288,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 261,
                        "end": 273,
                        "object": {
                          "type": "ThisExpression",
                          "start": 261,
                          "end": 265
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 276,
                        "end": 288,
                        "callee": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 286,
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
