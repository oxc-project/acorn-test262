privateNameAccessorssDerivedClasses.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 26,
              "name": "prop"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 39,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 47,
                      "end": 50,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 121,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 115,
                    "expression": {
                      "type": "CallExpression",
                      "start": 94,
                      "end": 114,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 106,
                          "end": 113,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 108,
                            "end": 113,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 94,
                        "end": 105,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 101,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 105,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
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
                  "start": 72,
                  "end": 82,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 75,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 82,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
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
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 222,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 220,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 220,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 193,
                    "end": 214,
                    "expression": {
                      "type": "CallExpression",
                      "start": 193,
                      "end": 213,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 205,
                          "end": 212,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 206,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 207,
                            "end": 212,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 193,
                        "end": 204,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 200,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 204,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
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
                  "start": 171,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 174,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 181,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
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
        "start": 130,
        "end": 137,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 150,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
