__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 202,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 45,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 45,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 45,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 37,
                    "end": 39,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 200,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 58,
              "end": 200,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
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
                "start": 66,
                "end": 200,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 69,
                    "end": 80,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 79,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 82,
                    "end": 137,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 83,
                      "end": 137,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 84,
                          "end": 87,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 85,
                            "end": 87,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 86,
                              "end": 87,
                              "typeName": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 87,
                                "decorators": [],
                                "name": "I",
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
                        "start": 89,
                        "end": 137,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 96,
                            "end": 100,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 96,
                              "end": 99,
                              "object": {
                                "type": "Identifier",
                                "start": 96,
                                "end": 97,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 122,
                            "end": 126,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 122,
                              "end": 125,
                              "object": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 123,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "directive": null
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
                    "start": 142,
                    "end": 194,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 153,
                      "end": 194,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 156,
                        "end": 194,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 159,
                            "end": 188,
                            "expression": {
                              "type": "CallExpression",
                              "start": 159,
                              "end": 187,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 159,
                                "end": 178,
                                "object": {
                                  "type": "ObjectExpression",
                                  "start": 160,
                                  "end": 175,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 161,
                                      "end": 165,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 161,
                                        "end": 162,
                                        "decorators": [],
                                        "name": "z",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 163,
                                        "end": 165,
                                        "value": 10,
                                        "raw": "10"
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 166,
                                      "end": 174,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 166,
                                        "end": 167,
                                        "decorators": [],
                                        "name": "f",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 168,
                                        "end": 174,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 168,
                                          "end": 172
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 173,
                                          "end": 174,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 177,
                                  "end": 178,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TSTypeAssertion",
                                  "start": 179,
                                  "end": 186,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 180,
                                    "end": 181,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 181,
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "start": 183,
                                    "end": 185,
                                    "properties": []
                                  }
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
                    "kind": "constructor",
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 240,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
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
        "start": 212,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 218,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 219,
              "end": 238,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 220,
                  "end": 229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 229,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 223,
                      "end": 229
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 238,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
