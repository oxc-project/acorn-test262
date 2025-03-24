__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 288,
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
        "end": 288,
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
            "end": 61,
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
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 286,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 93,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 87,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 286,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 243,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 242,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 214,
                          "name": "getMessage",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 217,
                          "end": 242,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BinaryExpression",
                            "start": 223,
                            "end": 242,
                            "left": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 230,
                              "name": "message",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 233,
                              "end": 242,
                              "object": {
                                "type": "ThisExpression",
                                "start": 233,
                                "end": 237
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 242,
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
                    "start": 252,
                    "end": 280,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 252,
                      "end": 279,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 252,
                        "end": 264,
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 264,
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
                        "start": 267,
                        "end": 279,
                        "callee": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 277,
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
