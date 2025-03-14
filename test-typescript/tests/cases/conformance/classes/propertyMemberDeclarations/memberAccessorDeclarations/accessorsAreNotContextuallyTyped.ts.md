__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 189,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 94,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 94,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 94,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 85,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 64,
                      "end": 85,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 65,
                          "end": 74,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 68,
                              "end": 74
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 76,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 149,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 143,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 125,
                      "end": 142,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 140,
                        "end": 142,
                        "raw": "\"\"",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 126,
                          "end": 135,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 127,
                            "end": 135,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 129,
                              "end": 135
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "C",
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
      "type": "VariableDeclaration",
      "start": 163,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 171,
            "end": 178,
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 177,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 171,
              "end": 174,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
