__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Experiment",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 20
          }
        ],
        "start": 15,
        "end": 21
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 40
                },
                "typeArguments": null,
                "start": 36,
                "end": 40
              },
              "start": 34,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 41
          }
        ],
        "start": 24,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "createExperiment",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 82
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 78,
                      "end": 97
                    }
                  ],
                  "start": 77,
                  "end": 98
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Experiment",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 123
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 128
                              },
                              "typeArguments": null,
                              "start": 124,
                              "end": 128
                            }
                          ],
                          "start": 123,
                          "end": 129
                        },
                        "start": 113,
                        "end": 129
                      },
                      "start": 111,
                      "end": 129
                    },
                    "start": 104,
                    "end": 129
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Experiment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 145
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 146,
                          "end": 150
                        }
                      ],
                      "start": 145,
                      "end": 151
                    },
                    "start": 135,
                    "end": 151
                  },
                  "start": 132,
                  "end": 151
                },
                "start": 77,
                "end": 151
              },
              "start": 75,
              "end": 151
            },
            "start": 59,
            "end": 151
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 151
        }
      ],
      "declare": true,
      "start": 45,
      "end": 152
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createExperiment",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 197,
                  "end": 202
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 202
              }
            ],
            "start": 185,
            "end": 204
          }
        ],
        "optional": false,
        "start": 168,
        "end": 205
      },
      "exportKind": "value",
      "start": 153,
      "end": 206
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 207
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "other2",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 24,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 51
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 67
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 75
                      },
                      "optional": false,
                      "computed": false,
                      "start": 61,
                      "end": 75
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 80
                    },
                    "optional": false,
                    "computed": false,
                    "start": 61,
                    "end": 80
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 83,
                    "end": 84
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 60,
                  "end": 84
                }
              ],
              "start": 54,
              "end": 86
            },
            "definite": false,
            "start": 48,
            "end": 86
          }
        ],
        "declare": false,
        "start": 42,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 87
}
```
