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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
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
                "name": "Name",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 91
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "funcData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 117
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 121
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 124
                          },
                          "optional": false,
                          "computed": false,
                          "start": 120,
                          "end": 124
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 129
                        },
                        "optional": false,
                        "computed": false,
                        "start": 120,
                        "end": 129
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 120,
                      "end": 131
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 102,
                    "end": 132
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someConst",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 157
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 164
                        },
                        "optional": false,
                        "computed": false,
                        "start": 160,
                        "end": 164
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 168
                      },
                      "optional": false,
                      "computed": false,
                      "start": 160,
                      "end": 168
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 141,
                    "end": 169
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 190
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
                          "name": "parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 201
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 203,
                        "end": 205
                      },
                      "expression": false,
                      "start": 190,
                      "end": 205
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 179,
                    "end": 205
                  }
                ],
                "start": 92,
                "end": 211
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 211
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 74,
            "end": 211
          }
        ],
        "start": 68,
        "end": 213
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 56,
      "end": 213
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 214
}
```
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 38
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 62
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    },
                    "start": 64,
                    "end": 72
                  },
                  "body": null,
                  "expression": false,
                  "start": 49,
                  "end": 73
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 91
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 94,
                        "end": 96
                      },
                      "definite": false,
                      "start": 88,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 82,
                  "end": 97
                }
              ],
              "start": 39,
              "end": 103
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 26,
            "end": 103
          }
        ],
        "start": 20,
        "end": 105
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
