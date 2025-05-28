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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 333,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 333,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 38,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 21,
                "end": 27,
                "name": "hello"
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 30,
                "end": 37,
                "value": "hello",
                "raw": "\"hello\""
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 43,
              "end": 56,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 43,
                "end": 49,
                "name": "world"
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 52,
                "end": 55,
                "value": 100,
                "raw": "100"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 110,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 62,
                "end": 72,
                "name": "calcHello"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 72,
                "end": 110,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 97,
                          "end": 103,
                          "name": "hello"
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 187,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 120,
                "end": 135,
                "name": "screamingHello"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 135,
                "end": 187,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 178,
                          "object": {
                            "type": "MemberExpression",
                            "start": 155,
                            "end": 166,
                            "object": {
                              "type": "ThisExpression",
                              "start": 155,
                              "end": 159
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 160,
                              "end": 166,
                              "name": "hello"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 178,
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 225,
              "end": 279,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 229,
                "end": 244,
                "name": "screamingHello"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 279,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "value": "NO",
                        "raw": "\"NO\""
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 285,
              "end": 331,
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
              "value": {
                "type": "FunctionExpression",
                "start": 293,
                "end": 331,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 313,
                          "end": 317
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 318,
                          "end": 324,
                          "name": "world"
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
