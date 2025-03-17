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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "Experiment",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "name": "Name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "name": "Name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 45,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 151,
            "name": "createExperiment",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 151,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 77,
                "end": 151,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 77,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 78,
                      "end": 97,
                      "name": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 82,
                        "name": "Name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 104,
                    "end": 129,
                    "name": "options",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 113,
                        "end": 129,
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 123,
                          "name": "Experiment",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 123,
                          "end": 129,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 124,
                              "end": 128,
                              "typeName": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 128,
                                "name": "Name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 145,
                      "name": "Experiment",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 145,
                      "end": 151,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 150,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 150,
                            "name": "Name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 153,
      "end": 206,
      "declaration": {
        "type": "CallExpression",
        "start": 168,
        "end": 205,
        "callee": {
          "type": "Identifier",
          "start": 168,
          "end": 184,
          "name": "createExperiment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 202,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "other2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "value": "./other",
        "raw": "\"./other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 87,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 61,
                    "end": 80,
                    "object": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 75,
                      "object": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 67,
                        "name": "other2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 75,
                        "name": "default",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 80,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 83,
                    "end": 84,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
