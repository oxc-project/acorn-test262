__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 44,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Experiment",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 24,
        "end": 43,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 40,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 151,
            "decorators": [],
            "name": "createExperiment",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 151,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 77,
                "end": 151,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 104,
                    "end": 129,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 113,
                        "end": 129,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 123,
                          "end": 129,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 124,
                              "end": 128,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 128,
                                "decorators": [],
                                "name": "Name",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 123,
                          "decorators": [],
                          "name": "Experiment",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 135,
                    "end": 151,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 145,
                      "end": 151,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 150,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 150,
                            "decorators": [],
                            "name": "Name",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 145,
                      "decorators": [],
                      "name": "Experiment",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 77,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 78,
                      "end": 97,
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 82,
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 153,
      "end": 206,
      "declaration": {
        "type": "CallExpression",
        "start": 168,
        "end": 205,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 185,
            "end": 204,
            "properties": [
              {
                "type": "Property",
                "start": 191,
                "end": 202,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 202,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 168,
          "end": 184,
          "decorators": [],
          "name": "createExperiment",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "raw": "\"./other\"",
        "value": "./other"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "other2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 87,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 86,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 54,
              "end": 86,
              "properties": [
                {
                  "type": "Property",
                  "start": 60,
                  "end": 84,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 61,
                    "end": 80,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 75,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 67,
                        "decorators": [],
                        "name": "other2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 75,
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 80,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 83,
                    "end": 84,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
