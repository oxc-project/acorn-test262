__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 260,
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
        "end": 260,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 28,
              "end": 42,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 30,
                  "end": 40,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 32,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 33,
                      "end": 39
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 113,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 54,
              "end": 113,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 60,
                "end": 62,
                "decorators": [],
                "name": "XX",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 74,
                  "end": 75,
                  "expression": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 76,
                "end": 113,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 78,
                    "end": 111,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 89,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 89,
                      "end": 111,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 90,
                          "end": 106,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 106,
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 99,
                              "end": 106,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 100,
                                "end": 106
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 108,
                        "end": 111,
                        "body": []
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 119,
            "end": 139,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 131,
              "end": 139,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 137,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 145,
            "end": 171,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 152,
              "end": 171,
              "id": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 163,
                  "end": 166,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 165,
                      "end": 166,
                      "typeName": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "Y",
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
                "start": 168,
                "end": 171,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 185,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 184,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 184,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 183,
                      "end": 184,
                      "typeName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 199,
            "expression": {
              "type": "CallExpression",
              "start": 190,
              "end": 198,
              "callee": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 192,
                  "end": 197,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 193,
                      "end": 196,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 211,
            "end": 220,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 215,
                "end": 219,
                "id": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 219,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 216,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 219,
                      "typeName": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 219,
                        "decorators": [],
                        "name": "XX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 225,
            "end": 234,
            "expression": {
              "type": "CallExpression",
              "start": 225,
              "end": 233,
              "callee": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 227,
                  "end": 232,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 228,
                      "end": 231,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 229,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
