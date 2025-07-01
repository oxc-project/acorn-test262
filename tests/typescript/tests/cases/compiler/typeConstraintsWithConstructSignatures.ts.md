__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 30,
            "end": 42
          }
        ],
        "start": 24,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "start": 54,
              "end": 55
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructable",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 77
              },
              "typeArguments": null,
              "start": 64,
              "end": 77
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 77
          }
        ],
        "start": 53,
        "end": 78
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
              "start": 85,
              "end": 96
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
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
                          "start": 110,
                          "end": 111
                        },
                        "typeArguments": null,
                        "start": 110,
                        "end": 111
                      },
                      "start": 108,
                      "end": 111
                    },
                    "start": 104,
                    "end": 111
                  },
                  "readonly": false,
                  "static": false,
                  "start": 97,
                  "end": 111
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 140
                        },
                        "typeArguments": null,
                        "start": 127,
                        "end": 140
                      },
                      "start": 125,
                      "end": 140
                    },
                    "start": 120,
                    "end": 140
                  },
                  "readonly": false,
                  "static": false,
                  "start": 113,
                  "end": 140
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 142,
                "end": 145
              },
              "expression": false,
              "start": 96,
              "end": 145
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 85,
            "end": 145
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 156
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
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
                          "start": 173,
                          "end": 174
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 181,
                              "end": 185
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 190
                            },
                            "optional": false,
                            "computed": false,
                            "start": 181,
                            "end": 190
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 177,
                          "end": 192
                        },
                        "definite": false,
                        "start": 173,
                        "end": 192
                      }
                    ],
                    "declare": false,
                    "start": 169,
                    "end": 193
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 226,
                          "end": 228
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 235,
                              "end": 239
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 240,
                              "end": 245
                            },
                            "optional": false,
                            "computed": false,
                            "start": 235,
                            "end": 245
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 231,
                          "end": 247
                        },
                        "definite": false,
                        "start": 226,
                        "end": 247
                      }
                    ],
                    "declare": false,
                    "start": 222,
                    "end": 248
                  }
                ],
                "start": 159,
                "end": 274
              },
              "expression": false,
              "start": 156,
              "end": 274
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 150,
            "end": 274
          }
        ],
        "start": 79,
        "end": 276
      },
      "abstract": false,
      "declare": false,
      "start": 46,
      "end": 276
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
