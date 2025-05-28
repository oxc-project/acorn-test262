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
        "decorators": [],
        "name": "Experiment",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Name",
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
      "type": "VariableDeclaration",
      "start": 45,
      "end": 152,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 151,
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
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 123,
                          "decorators": [],
                          "name": "Experiment",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Name",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 145,
                      "decorators": [],
                      "name": "Experiment",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "Name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "createExperiment",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 202,
                  "value": "foo",
                  "raw": "\"foo\""
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
  "end": 73,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./other",
        "raw": "\"./other\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 73,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 73,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 48,
              "end": 72,
              "properties": [
                {
                  "type": "Property",
                  "start": 54,
                  "end": 69,
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "start": 55,
                    "end": 65,
                    "object": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 60,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 65,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 68,
                    "end": 69,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
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
