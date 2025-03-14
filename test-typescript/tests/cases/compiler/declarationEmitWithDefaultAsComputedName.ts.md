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
        "optional": false
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
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "decorators": [],
              "name": "name",
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "Name",
                  "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "Name",
              "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 128,
                                "decorators": [],
                                "name": "Name",
                                "optional": false
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
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 150,
                            "decorators": [],
                            "name": "Name",
                            "optional": false
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
                      "optional": false
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
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 82,
                        "decorators": [],
                        "name": "Name",
                        "optional": false
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
                  "optional": false
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
          "optional": false
        },
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./other\"",
        "value": "./other"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 72,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "obj",
              "optional": false
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
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 55,
                    "end": 65,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 60,
                      "decorators": [],
                      "name": "other",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 65,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 68,
                    "end": 69,
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
