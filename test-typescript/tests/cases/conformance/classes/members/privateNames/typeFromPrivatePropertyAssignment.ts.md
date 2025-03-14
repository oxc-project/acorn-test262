__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 28,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 27,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 13,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 152,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 152,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 53,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 44,
              "end": 46,
              "name": "a"
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 67,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 58,
              "end": 60,
              "name": "b"
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 150,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 150,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 111,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 110,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 97,
                          "end": 110,
                          "operator": "||",
                          "left": {
                            "type": "MemberExpression",
                            "start": 97,
                            "end": 104,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 97,
                              "end": 101
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 102,
                              "end": 104,
                              "name": "a"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 108,
                            "end": 110,
                            "properties": []
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 120,
                    "end": 144,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 120,
                      "end": 143,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 120,
                        "end": 127,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 127,
                          "name": "b"
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 130,
                        "end": 143,
                        "operator": "||",
                        "left": {
                          "type": "MemberExpression",
                          "start": 130,
                          "end": 137,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 130,
                            "end": 134
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 135,
                            "end": 137,
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 141,
                          "end": 143,
                          "properties": []
                        }
                      }
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
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
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
