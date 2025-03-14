test/foo.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 52,
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 52,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 50,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 35,
                "end": 50,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 39,
                    "end": 49,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 49,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 42,
                          "end": 49
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "decorators": [],
          "name": "M2",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
test/other.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 51,
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 51,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 49,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 35,
                "end": 49,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 39,
                    "end": 48,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 48,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 48,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 42,
                          "end": 48
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "decorators": [],
          "name": "M2",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
test/sub/relMod.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 45,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 33,
              "end": 45,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 48,
      "end": 62,
      "expression": {
        "type": "Identifier",
        "start": 57,
        "end": 61,
        "decorators": [],
        "name": "Test",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
test/file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "raw": "'foo'",
          "value": "foo"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 41,
        "decorators": [],
        "name": "other",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 44,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 52,
          "end": 61,
          "raw": "'./other'",
          "value": "./other"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 77,
        "decorators": [],
        "name": "relMod",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 80,
        "end": 103,
        "expression": {
          "type": "Literal",
          "start": 88,
          "end": 102,
          "raw": "'./sub/relMod'",
          "value": "./sub/relMod"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 106,
      "end": 168,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 118,
        "end": 168,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 165,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 129,
                  "end": 165,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 140,
                      "end": 164,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 162,
                          "end": 163,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 140,
                        "end": 161,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 140,
                          "end": 150,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 140,
                            "end": 148,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 145,
                              "decorators": [],
                              "name": "other",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 148,
                              "decorators": [],
                              "name": "M2",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 161,
                          "decorators": [],
                          "name": "charCodeAt",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 139,
                    "decorators": [],
                    "name": "relMod",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 109,
        "end": 117,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 109,
          "end": 115,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 115,
            "decorators": [],
            "name": "M2",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
