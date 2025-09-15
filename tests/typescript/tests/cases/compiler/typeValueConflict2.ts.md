__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 35
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 34,
                    "end": 35
                  }
                ],
                "start": 33,
                "end": 36
              },
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
                      "start": 47,
                      "end": 58
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 62,
                                "end": 63
                              },
                              "typeArguments": null,
                              "start": 62,
                              "end": 63
                            },
                            "start": 60,
                            "end": 63
                          },
                          "start": 59,
                          "end": 63
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 65,
                        "end": 76
                      },
                      "expression": false,
                      "start": 58,
                      "end": 76
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 47,
                    "end": 76
                  }
                ],
                "start": 37,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
          }
        ],
        "start": 13,
        "end": 84
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 97
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 113,
                  "end": 114
                },
                "definite": false,
                "start": 108,
                "end": 114
              }
            ],
            "declare": false,
            "start": 104,
            "end": 115
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M1",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 211
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "optional": false,
              "computed": false,
              "start": 209,
              "end": 213
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              ],
              "start": 213,
              "end": 221
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 222,
              "end": 229
            },
            "abstract": false,
            "declare": false,
            "start": 193,
            "end": 229
          }
        ],
        "start": 98,
        "end": 231
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 85,
      "end": 231
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 244
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M1",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 292
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "optional": false,
              "computed": false,
              "start": 290,
              "end": 294
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 295,
                  "end": 301
                }
              ],
              "start": 294,
              "end": 302
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 303,
              "end": 310
            },
            "abstract": false,
            "declare": false,
            "start": 274,
            "end": 310
          }
        ],
        "start": 245,
        "end": 312
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 232,
      "end": 312
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 312
}
```
