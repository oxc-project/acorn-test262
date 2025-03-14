ClassAndModuleThatMergeWithModulesExportedStaticFunctionUsingClassPrivateStatics.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 101,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 23,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 25,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 48,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 44,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 99,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "sfn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 97,
                    "argument": {
                      "type": "Literal",
                      "start": 94,
                      "end": 96,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 83,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "clodule",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 252,
      "body": {
        "type": "TSModuleBlock",
        "start": 118,
        "end": 252,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 168,
            "end": 250,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 175,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 250,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 220,
                    "end": 244,
                    "argument": {
                      "type": "CallExpression",
                      "start": 227,
                      "end": 243,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 239,
                          "end": 242,
                          "raw": "'a'",
                          "value": "a"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 227,
                        "end": 238,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 234,
                          "decorators": [],
                          "name": "clodule",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "decorators": [],
                          "name": "sfn",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 184,
                "end": 186,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 194,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 193,
                      "end": 194,
                      "typeName": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 200,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 199,
                      "end": 200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 200,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 201,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 203,
                  "end": 209
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 186,
                "end": 189,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 187,
                    "end": 188,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 117,
        "decorators": [],
        "name": "clodule",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
