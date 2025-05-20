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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 44,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 69,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 295,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 295,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 295,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 252,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 251,
                        "definite": false,
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
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 232,
                            "end": 251,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 239,
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 242,
                              "end": 251,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 242,
                                "end": 246
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 247,
                                "end": 251,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 261,
                    "end": 289,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 261,
                      "end": 288,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 261,
                        "end": 273,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 261,
                          "end": 265
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 276,
                        "end": 288,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 286,
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
