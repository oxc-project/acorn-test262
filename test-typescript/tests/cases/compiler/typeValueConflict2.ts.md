__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 73,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 73,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 56,
                          "end": 60,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 57,
                            "end": 60,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 59,
                              "end": 60,
                              "typeName": {
                                "type": "Identifier",
                                "start": 59,
                                "end": 60,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
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
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 30,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 31,
                    "end": 32,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
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
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 225,
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 225,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 109,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 108,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "M1",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 187,
            "end": 223,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 216,
              "end": 223,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 203,
              "end": 207,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "M1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 207,
              "end": 215,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 208,
                  "end": 214
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 226,
      "end": 303,
      "body": {
        "type": "TSModuleBlock",
        "start": 236,
        "end": 303,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 265,
            "end": 301,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 294,
              "end": 301,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 281,
              "end": 285,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 281,
                "end": 283,
                "decorators": [],
                "name": "M1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 285,
              "end": 293,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 286,
                  "end": 292
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "decorators": [],
        "name": "M3",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
