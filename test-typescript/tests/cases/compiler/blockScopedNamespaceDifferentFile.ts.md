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
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "name": "Name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 92,
                "end": 211,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 102,
                    "end": 132,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 117,
                      "name": "funcData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 124,
                            "name": "AA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 129,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 141,
                    "end": 169,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 157,
                      "name": "someConst",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "name": "AA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 168,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 179,
                    "end": 205,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 190,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 190,
                      "end": 205,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 191,
                          "end": 201,
                          "name": "parameters",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 203,
                        "end": 205,
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
              "typeParameters": null,
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
  "end": 106,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "AA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": null,
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "const",
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
