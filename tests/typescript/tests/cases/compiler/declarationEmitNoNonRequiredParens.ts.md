__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "initializer": null,
              "computed": false,
              "start": 23,
              "end": 24
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "initializer": null,
              "computed": false,
              "start": 26,
              "end": 27
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "initializer": null,
              "computed": false,
              "start": 29,
              "end": 30
            }
          ],
          "start": 17,
          "end": 32
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestType",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 54
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "typeArguments": null,
          "start": 57,
          "end": 68
        },
        "declare": false,
        "start": 41,
        "end": 69
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 34,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 90,
                    "end": 94
                  },
                  "start": 90,
                  "end": 95
                },
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TestType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 107
                      },
                      "typeArguments": null,
                      "start": 99,
                      "end": 107
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 115
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 122,
                                "end": 130
                              },
                              "typeArguments": null,
                              "start": 122,
                              "end": 130
                            },
                            "start": 116,
                            "end": 130
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 132,
                            "end": 138
                          }
                        ],
                        "start": 115,
                        "end": 139
                      },
                      "start": 108,
                      "end": 139
                    },
                    "start": 99,
                    "end": 140
                  },
                  "start": 99,
                  "end": 142
                },
                "start": 90,
                "end": 142
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 153,
                "end": 156
              },
              "start": 90,
              "end": 156
            },
            "definite": false,
            "start": 84,
            "end": 156
          }
        ],
        "declare": false,
        "start": 78,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 71,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
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
    "value": "enum",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 12,
    "end": 16,
    "range": [
      12,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 41,
    "end": 45,
    "range": [
      41,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "TestType",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83,
    "range": [
      78,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 90,
    "end": 94,
    "range": [
      90,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "TestType",
    "start": 99,
    "end": 107,
    "range": [
      99,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 108,
    "end": 115,
    "range": [
      108,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 116,
    "end": 121,
    "range": [
      116,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "TestType",
    "start": 122,
    "end": 130,
    "range": [
      122,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 143,
    "end": 152,
    "range": [
      143,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 153,
    "end": 156,
    "range": [
      153,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  }
]
```
