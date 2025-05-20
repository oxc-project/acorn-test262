__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 333,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 333,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 333,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 333,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 38,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 21,
                "end": 27,
                "name": "hello"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 30,
                "end": 37,
                "raw": "\"hello\"",
                "value": "hello"
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 43,
              "end": 56,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 43,
                "end": 49,
                "name": "world"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 52,
                "end": 55,
                "raw": "100",
                "value": 100
              }
            },
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 110,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 62,
                "end": 72,
                "name": "calcHello"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 72,
                "end": 110,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 75,
                  "end": 110,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 85,
                      "end": 104,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 92,
                        "end": 103,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 97,
                          "end": 103,
                          "name": "hello"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 187,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 120,
                "end": 135,
                "name": "screamingHello"
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 135,
                "end": 187,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 138,
                  "end": 187,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 148,
                      "end": 181,
                      "argument": {
                        "type": "CallExpression",
                        "start": 155,
                        "end": 180,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 178,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 155,
                            "end": 166,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 155,
                              "end": 159
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 160,
                              "end": 166,
                              "name": "hello"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 178,
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 225,
              "end": 279,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 229,
                "end": 244,
                "name": "screamingHello"
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 279,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 252,
                  "end": 279,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 262,
                      "end": 273,
                      "argument": {
                        "type": "Literal",
                        "start": 268,
                        "end": 272,
                        "raw": "\"NO\"",
                        "value": "NO"
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
                    "start": 245,
                    "end": 250,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 285,
              "end": 331,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 285,
                "end": 293,
                "decorators": [],
                "name": "getWorld",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 293,
                "end": 331,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 296,
                  "end": 331,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 306,
                      "end": 325,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 313,
                        "end": 324,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 313,
                          "end": 317
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 318,
                          "end": 324,
                          "name": "world"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
