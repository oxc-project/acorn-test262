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
        "name": "TestFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 21,
            "end": 44
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 49,
            "end": 69
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 85
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    "start": 93,
                    "end": 101
                  },
                  "start": 86,
                  "end": 101
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 223
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 239
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 242,
                                "end": 246
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 247,
                                "end": 251
                              },
                              "optional": false,
                              "computed": false,
                              "start": 242,
                              "end": 251
                            },
                            "start": 232,
                            "end": 251
                          },
                          "id": null,
                          "generator": false,
                          "start": 226,
                          "end": 251
                        },
                        "definite": false,
                        "start": 213,
                        "end": 251
                      }
                    ],
                    "declare": false,
                    "start": 209,
                    "end": 252
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 261,
                          "end": 265
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 273
                        },
                        "optional": false,
                        "computed": false,
                        "start": 261,
                        "end": 273
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 286
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 276,
                        "end": 288
                      },
                      "start": 261,
                      "end": 288
                    },
                    "directive": null,
                    "start": 261,
                    "end": 289
                  }
                ],
                "start": 103,
                "end": 295
              },
              "expression": false,
              "start": 85,
              "end": 295
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 74,
            "end": 295
          }
        ],
        "start": 15,
        "end": 297
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
