__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 27
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 45,
                          "end": 52
                        },
                        "start": 43,
                        "end": 52
                      },
                      "start": 42,
                      "end": 52
                    },
                    "init": null,
                    "definite": false,
                    "start": 42,
                    "end": 52
                  }
                ],
                "declare": false,
                "start": 38,
                "end": 53
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 31,
              "end": 53
            }
          ],
          "start": 28,
          "end": 55
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 27
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        "start": 43,
                        "end": 51
                      },
                      "start": 42,
                      "end": 51
                    },
                    "init": null,
                    "definite": false,
                    "start": 42,
                    "end": 51
                  }
                ],
                "declare": false,
                "start": 38,
                "end": 52
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 31,
              "end": 52
            }
          ],
          "start": 28,
          "end": 54
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 34,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 33,
              "end": 45
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 45
          }
        ],
        "start": 19,
        "end": 47
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 61
      },
      "start": 48,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foo",
          "raw": "'foo'",
          "start": 21,
          "end": 26
        },
        "start": 13,
        "end": 27
      },
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 41
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./other",
          "raw": "'./other'",
          "start": 52,
          "end": 61
        },
        "start": 44,
        "end": 62
      },
      "importKind": "value",
      "start": 29,
      "end": 63
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "relMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 77
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./sub/relMod",
          "raw": "'./sub/relMod'",
          "start": 88,
          "end": 102
        },
        "start": 80,
        "end": 103
      },
      "importKind": "value",
      "start": 64,
      "end": 104
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 115
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 115
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "optional": false,
        "computed": false,
        "start": 109,
        "end": 117
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "relMod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 139
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 145
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "M2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 146,
                              "end": 148
                            },
                            "optional": false,
                            "computed": false,
                            "start": 140,
                            "end": 148
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 150
                          },
                          "optional": false,
                          "computed": false,
                          "start": 140,
                          "end": 150
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "charCodeAt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 161
                        },
                        "optional": false,
                        "computed": false,
                        "start": 140,
                        "end": 161
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 162,
                          "end": 163
                        }
                      ],
                      "optional": false,
                      "start": 140,
                      "end": 164
                    }
                  ],
                  "start": 129,
                  "end": 165
                },
                "definite": false,
                "start": 125,
                "end": 165
              }
            ],
            "declare": false,
            "start": 121,
            "end": 166
          }
        ],
        "start": 118,
        "end": 168
      },
      "alternate": null,
      "start": 106,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
