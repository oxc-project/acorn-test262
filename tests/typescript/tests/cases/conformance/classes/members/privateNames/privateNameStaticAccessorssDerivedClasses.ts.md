__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 137,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 33,
              "name": "prop"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 60,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 60,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 57,
                      "value": 123,
                      "raw": "123"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 135,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 78,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 135,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 96,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 82,
                      "end": 96,
                      "exprName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 96,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 135,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 108,
                    "end": 129,
                    "expression": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 128,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 119,
                        "object": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 115,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 119,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 120,
                          "end": 127,
                          "object": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 122,
                            "end": 127,
                            "name": "prop"
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 151,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 160,
        "end": 164,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 241,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 184,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 184,
              "end": 241,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 188,
                      "end": 202,
                      "exprName": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 202,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 241,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 214,
                    "end": 235,
                    "expression": {
                      "type": "CallExpression",
                      "start": 214,
                      "end": 234,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 214,
                        "end": 225,
                        "object": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 221,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 225,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 226,
                          "end": 233,
                          "object": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 227,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 228,
                            "end": 233,
                            "name": "prop"
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
