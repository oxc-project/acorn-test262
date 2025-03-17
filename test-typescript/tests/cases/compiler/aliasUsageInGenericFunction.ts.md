__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Model",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "name": "someData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                }
              },
              "accessibility": "public"
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
  "end": 158,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 66,
          "value": "./aliasUsageInGenericFunction_backbone",
          "raw": "\"./aliasUsageInGenericFunction_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 157,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 76,
        "end": 157,
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 100,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 109,
          "end": 123,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 117,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 157,
          "body": []
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
  "end": 378,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 66,
          "value": "./aliasUsageInGenericFunction_backbone",
          "raw": "\"./aliasUsageInGenericFunction_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 86,
        "end": 134,
        "expression": {
          "type": "Literal",
          "start": 94,
          "end": 133,
          "value": "./aliasUsageInGenericFunction_moduleA",
          "raw": "\"./aliasUsageInGenericFunction_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 168,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 169,
        "end": 219,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 175,
            "end": 217,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 193,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 195,
                "end": 216,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 202,
                  "end": 216,
                  "left": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 210,
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 216,
                    "name": "Model",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 232,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 274,
          "end": 278,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 278,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 277,
              "end": 278,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
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
        "start": 280,
        "end": 297,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 286,
            "end": 295,
            "argument": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 272,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 243,
              "end": 272,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 245,
                  "end": 270,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 270,
                        "name": "IHasVisualizationModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 325,
            "callee": {
              "type": "Identifier",
              "start": 306,
              "end": 309,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 310,
                "end": 324,
                "properties": [
                  {
                    "type": "Property",
                    "start": 312,
                    "end": 322,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 322,
                      "name": "moduleA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 336,
            "end": 376,
            "callee": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 340,
                "end": 375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 342,
                    "end": 373,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "TSTypeAssertion",
                      "start": 345,
                      "end": 373,
                      "expression": {
                        "type": "Literal",
                        "start": 369,
                        "end": 373,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 368,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 368,
                          "name": "IHasVisualizationModel",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
