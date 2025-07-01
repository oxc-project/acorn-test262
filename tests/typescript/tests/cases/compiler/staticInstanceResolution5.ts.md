__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
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
                "name": "timeout",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
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
                    "name": "delay",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      },
                      "start": 47,
                      "end": 55
                    },
                    "start": 42,
                    "end": 55
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 65
                    },
                    "typeArguments": null,
                    "start": 58,
                    "end": 65
                  },
                  "start": 56,
                  "end": 65
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 83,
                        "end": 87
                      },
                      "start": 76,
                      "end": 88
                    }
                  ],
                  "start": 66,
                  "end": 94
                },
                "expression": false,
                "start": 41,
                "end": 94
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 27,
              "end": 94
            }
          ],
          "start": 21,
          "end": 96
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
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
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "staticInstanceResolution5_0",
          "raw": "'staticInstanceResolution5_0'",
          "start": 23,
          "end": 52
        },
        "start": 15,
        "end": 53
      },
      "importKind": "value",
      "start": 0,
      "end": 54
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "w1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 102
                  },
                  "start": 95,
                  "end": 102
                },
                "start": 93,
                "end": 102
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 107,
              "end": 110
            },
            "id": null,
            "generator": false,
            "start": 92,
            "end": 110
          },
          "definite": false,
          "start": 88,
          "end": 110
        }
      ],
      "declare": false,
      "start": 84,
      "end": 111
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "init": {
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
                "name": "w2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 139
                  },
                  "start": 132,
                  "end": 139
                },
                "start": 130,
                "end": 139
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 141,
              "end": 144
            },
            "expression": false,
            "start": 120,
            "end": 144
          },
          "definite": false,
          "start": 116,
          "end": 144
        }
      ],
      "declare": false,
      "start": 112,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "w3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WinJS",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 165
              },
              "typeArguments": null,
              "start": 160,
              "end": 165
            },
            "start": 158,
            "end": 165
          },
          "start": 156,
          "end": 165
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 167,
        "end": 170
      },
      "expression": false,
      "start": 145,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
