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
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
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
                "name": "someData",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 40
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 25,
              "end": 49
            }
          ],
          "start": 19,
          "end": 51
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
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
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInGenericFunction_backbone",
          "raw": "\"./aliasUsageInGenericFunction_backbone\"",
          "start": 26,
          "end": 66
        },
        "start": 18,
        "end": 67
      },
      "importKind": "value",
      "start": 0,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 100
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 123
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 123
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 124,
          "end": 157
        },
        "abstract": false,
        "declare": false,
        "start": 76,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 69,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
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
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInGenericFunction_backbone",
          "raw": "\"./aliasUsageInGenericFunction_backbone\"",
          "start": 26,
          "end": 66
        },
        "start": 18,
        "end": 67
      },
      "importKind": "value",
      "start": 0,
      "end": 68
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 83
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInGenericFunction_moduleA",
          "raw": "\"./aliasUsageInGenericFunction_moduleA\"",
          "start": 94,
          "end": 133
        },
        "start": 86,
        "end": 134
      },
      "importKind": "value",
      "start": 69,
      "end": 135
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 168
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 193
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 210
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 216
                  },
                  "start": 202,
                  "end": 216
                },
                "typeArguments": null,
                "start": 195,
                "end": 216
              },
              "start": 193,
              "end": 216
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 217
          }
        ],
        "start": 169,
        "end": 219
      },
      "declare": false,
      "start": 136,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 232
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 233,
              "end": 234
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IHasVisualizationModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 270
                    },
                    "start": 246,
                    "end": 270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 245,
                  "end": 270
                }
              ],
              "start": 243,
              "end": 272
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 272
          }
        ],
        "start": 232,
        "end": 273
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 277,
                "end": 278
              },
              "typeArguments": null,
              "start": 277,
              "end": 278
            },
            "start": 275,
            "end": 278
          },
          "start": 274,
          "end": 278
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
            },
            "start": 286,
            "end": 295
          }
        ],
        "start": 280,
        "end": 297
      },
      "expression": false,
      "start": 220,
      "end": 297
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "moduleA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 322
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 312,
                    "end": 322
                  }
                ],
                "start": 310,
                "end": 324
              }
            ],
            "optional": false,
            "start": 306,
            "end": 325
          },
          "definite": false,
          "start": 302,
          "end": 325
        }
      ],
      "declare": false,
      "start": 298,
      "end": 326
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 339
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
                    "value": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 368
                        },
                        "typeArguments": null,
                        "start": 346,
                        "end": 368
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 369,
                        "end": 373
                      },
                      "start": 345,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 342,
                    "end": 373
                  }
                ],
                "start": 340,
                "end": 375
              }
            ],
            "optional": false,
            "start": 336,
            "end": 376
          },
          "definite": false,
          "start": 331,
          "end": 376
        }
      ],
      "declare": false,
      "start": 327,
      "end": 377
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 377
}
```
