__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 13,
    "end": 18,
    "range": [
      13,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "someData",
    "start": 32,
    "end": 40,
    "range": [
      32,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
          "value": "./aliasUsageInFunctionExpression_backbone",
          "raw": "\"./aliasUsageInFunctionExpression_backbone\"",
          "start": 26,
          "end": 69
        },
        "start": 18,
        "end": 70
      },
      "importKind": "value",
      "start": 0,
      "end": 71
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
          "start": 85,
          "end": 103
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
            "start": 112,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 126
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 127,
          "end": 160
        },
        "abstract": false,
        "declare": false,
        "start": 79,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 72,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "Backbone",
    "start": 7,
    "end": 15,
    "range": [
      7,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./aliasUsageInFunctionExpression_backbone\"",
    "start": 26,
    "end": 69,
    "range": [
      26,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84,
    "range": [
      79,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "VisualizationModel",
    "start": 85,
    "end": 103,
    "range": [
      85,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Backbone",
    "start": 112,
    "end": 120,
    "range": [
      112,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
          "value": "./aliasUsageInFunctionExpression_backbone",
          "raw": "\"./aliasUsageInFunctionExpression_backbone\"",
          "start": 26,
          "end": 69
        },
        "start": 18,
        "end": 70
      },
      "importKind": "value",
      "start": 0,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInFunctionExpression_moduleA",
          "raw": "\"./aliasUsageInFunctionExpression_moduleA\"",
          "start": 97,
          "end": 139
        },
        "start": 89,
        "end": 140
      },
      "importKind": "value",
      "start": 72,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 174
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
              "start": 181,
              "end": 199
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
                    "start": 208,
                    "end": 216
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 222
                  },
                  "start": 208,
                  "end": 222
                },
                "typeArguments": null,
                "start": 201,
                "end": 222
              },
              "start": 199,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 223
          }
        ],
        "start": 175,
        "end": 225
      },
      "declare": false,
      "start": 142,
      "end": 225
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                      "name": "IHasVisualizationModel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 260
                    },
                    "typeArguments": null,
                    "start": 238,
                    "end": 260
                  },
                  "start": 236,
                  "end": 260
                },
                "start": 235,
                "end": 260
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "id": null,
            "generator": false,
            "start": 234,
            "end": 266
          },
          "definite": false,
          "start": 230,
          "end": 266
        }
      ],
      "declare": false,
      "start": 226,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 269
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleA",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 286
          },
          "id": null,
          "generator": false,
          "start": 272,
          "end": 286
        },
        "start": 268,
        "end": 286
      },
      "directive": null,
      "start": 268,
      "end": 287
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "Backbone",
    "start": 7,
    "end": 15,
    "range": [
      7,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./aliasUsageInFunctionExpression_backbone\"",
    "start": 26,
    "end": 69,
    "range": [
      26,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleA",
    "start": 79,
    "end": 86,
    "range": [
      79,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "String",
    "value": "\"./aliasUsageInFunctionExpression_moduleA\"",
    "start": 97,
    "end": 139,
    "range": [
      97,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151,
    "range": [
      142,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "IHasVisualizationModel",
    "start": 152,
    "end": 174,
    "range": [
      152,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "VisualizationModel",
    "start": 181,
    "end": 199,
    "range": [
      181,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "Backbone",
    "start": 208,
    "end": 216,
    "range": [
      208,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 217,
    "end": 222,
    "range": [
      217,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229,
    "range": [
      226,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "IHasVisualizationModel",
    "start": 238,
    "end": 260,
    "range": [
      238,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 276,
    "end": 278,
    "range": [
      276,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleA",
    "start": 279,
    "end": 286,
    "range": [
      279,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  }
]
```
