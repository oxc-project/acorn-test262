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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 73,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 56,
                          "end": 60,
                          "name": "a",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 30,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 31,
                    "end": 32,
                    "name": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "T",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "name": "M1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 187,
            "end": 223,
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 203,
              "end": 207,
              "object": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "name": "M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 216,
              "end": 223,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
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
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 226,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 236,
        "end": 303,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 265,
            "end": 301,
            "id": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 281,
              "end": 285,
              "object": {
                "type": "Identifier",
                "start": 281,
                "end": 283,
                "name": "M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 294,
              "end": 301,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
