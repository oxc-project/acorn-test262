__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 214,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 211,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 81,
              "end": 211,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 92,
                "end": 211,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 102,
                    "end": 132,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 117,
                      "decorators": [],
                      "name": "funcData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "CallExpression",
                      "start": 120,
                      "end": 131,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 120,
                        "end": 129,
                        "object": {
                          "type": "MemberExpression",
                          "start": 120,
                          "end": 124,
                          "object": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 124,
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 129,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 141,
                    "end": 169,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 157,
                      "decorators": [],
                      "name": "someConst",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "MemberExpression",
                      "start": 160,
                      "end": 168,
                      "object": {
                        "type": "MemberExpression",
                        "start": 160,
                        "end": 164,
                        "object": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 168,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 179,
                    "end": 205,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 190,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 190,
                      "end": 205,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 191,
                          "end": 201,
                          "decorators": [],
                          "name": "parameters",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 203,
                        "end": 205,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
  "end": 105,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 105,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 39,
              "end": 103,
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "start": 49,
                  "end": 73,
                  "id": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 62,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    }
                  },
                  "body": null,
                  "expression": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 97,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 94,
                        "end": 96,
                        "value": "",
                        "raw": "\"\""
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
