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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "TestFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 44,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 85,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 295,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 101,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 223,
                          "name": "getMessage",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 226,
                          "end": 251,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BinaryExpression",
                            "start": 232,
                            "end": 251,
                            "left": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 239,
                              "name": "message",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 276,
                        "end": 288,
                        "callee": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 286,
                          "name": "getMessage",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
