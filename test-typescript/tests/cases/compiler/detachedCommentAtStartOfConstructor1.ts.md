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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 288,
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
              "optional": false
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
            "end": 61,
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 286,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 286,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 214,
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 217,
                          "end": 242,
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 223,
                            "end": 242,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 230,
                              "decorators": [],
                              "name": "message",
                              "optional": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 233,
                              "end": 242,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 233,
                                "end": 237
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 242,
                                "decorators": [],
                                "name": "name",
                                "optional": false
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 264,
                          "decorators": [],
                          "name": "message",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 267,
                        "end": 279,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 277,
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false
                        },
                        "optional": false
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
                  "start": 78,
                  "end": 93,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 87,
                      "end": 93
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
        "end": 14,
        "decorators": [],
        "name": "TestFile",
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
