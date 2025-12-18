__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "OuterModule",
        "raw": "\"OuterModule\"",
        "start": 15,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 44
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "./SubModule",
                "raw": "\"./SubModule\"",
                "start": 55,
                "end": 68
              },
              "start": 47,
              "end": 69
            },
            "importKind": "value",
            "start": 35,
            "end": 70
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 90
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
                    "name": "StaticVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    },
                    "start": 124,
                    "end": 132
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 101,
                  "end": 133
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 160
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    },
                    "start": 160,
                    "end": 168
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
                  "start": 142,
                  "end": 169
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 186
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 190
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 192
                        },
                        "start": 188,
                        "end": 192
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 192
                    },
                    "start": 186,
                    "end": 192
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
                  "start": 178,
                  "end": 193
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
                    "start": 202,
                    "end": 213
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 213,
                    "end": 216
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 202,
                  "end": 216
                }
              ],
              "start": 91,
              "end": 222
            },
            "abstract": false,
            "declare": false,
            "start": 75,
            "end": 222
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 245
            },
            "start": 227,
            "end": 246
          }
        ],
        "start": 29,
        "end": 248
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"OuterModule\"",
    "start": 15,
    "end": 28,
    "range": [
      15,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 42,
    "end": 44,
    "range": [
      42,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "\"./SubModule\"",
    "start": 55,
    "end": 68,
    "range": [
      55,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80,
    "range": [
      75,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 81,
    "end": 90,
    "range": [
      81,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 108,
    "end": 114,
    "range": [
      108,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "StaticVar",
    "start": 115,
    "end": 124,
    "range": [
      115,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceVar",
    "start": 149,
    "end": 160,
    "range": [
      149,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 188,
    "end": 190,
    "range": [
      188,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 202,
    "end": 213,
    "range": [
      202,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 236,
    "end": 245,
    "range": [
      236,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  }
]
```
