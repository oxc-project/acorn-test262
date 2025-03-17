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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 200,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 58,
              "end": 200,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 66,
                "end": 200,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 69,
                    "end": 80,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 79,
                      "value": 0,
                      "raw": "0"
                    },
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
                    "start": 82,
                    "end": 137,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 83,
                      "end": 137,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 84,
                          "end": 87,
                          "name": "x",
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
                                "name": "I",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 142,
                    "end": 194,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 153,
                      "end": 194,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 161,
                                        "end": 162,
                                        "name": "z",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 163,
                                        "end": 165,
                                        "value": 10,
                                        "raw": "10"
                                      },
                                      "kind": "init",
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 166,
                                      "end": 174,
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 166,
                                        "end": 167,
                                        "name": "f",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                          "name": "f",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 177,
                                  "end": 178,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "TSTypeAssertion",
                                  "start": 179,
                                  "end": 186,
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "start": 183,
                                    "end": 185,
                                    "properties": []
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 180,
                                    "end": 181,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 181,
                                      "name": "I",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 218,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 219,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 220,
                  "end": 229,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 229,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 223,
                      "end": 229
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 238,
                "body": []
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
