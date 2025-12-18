__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mxs",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mx",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 13
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "list",
                "raw": "'list'",
                "start": 14,
                "end": 20
              },
              "start": 14,
              "end": 20
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mxs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "typeArguments": null,
                "start": 22,
                "end": 25
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "p1",
                  "raw": "'p1'",
                  "start": 26,
                  "end": 30
                },
                "start": 26,
                "end": 30
              },
              "start": 22,
              "end": 31
            }
          ],
          "start": 13,
          "end": 32
        },
        "start": 11,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mx",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
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
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 49
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 51,
            "end": 52
          }
        ],
        "start": 47,
        "end": 53
      },
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
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
                  "start": 62,
                  "end": 63
                },
                "typeArguments": null,
                "start": 62,
                "end": 63
              },
              "start": 60,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 64
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              },
              "start": 69,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 67,
            "end": 73
          }
        ],
        "start": 54,
        "end": 75
      },
      "declare": false,
      "start": 35,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrElem",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 89
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "list",
                "raw": "'list'",
                "start": 93,
                "end": 99
              },
              "start": 93,
              "end": 99
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrElem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 108
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                },
                "start": 101,
                "end": 116
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 117,
                  "end": 118
                },
                "start": 117,
                "end": 118
              },
              "start": 101,
              "end": 119
            }
          ],
          "start": 92,
          "end": 120
        },
        "start": 92,
        "end": 122
      },
      "declare": false,
      "start": 77,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleElem",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 139
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "list",
                  "raw": "'list'",
                  "start": 144,
                  "end": 150
                },
                "start": 144,
                "end": 150
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TupleElem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 161
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 161
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 162,
                      "end": 163
                    },
                    "start": 162,
                    "end": 163
                  },
                  "start": 152,
                  "end": 164
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 165,
                    "end": 166
                  },
                  "start": 165,
                  "end": 166
                },
                "start": 152,
                "end": 167
              }
            ],
            "start": 143,
            "end": 168
          }
        ],
        "start": 142,
        "end": 169
      },
      "declare": false,
      "start": 125,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Mxs",
    "start": 5,
    "end": 8,
    "range": [
      5,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "Mx",
    "start": 11,
    "end": 13,
    "range": [
      11,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "String",
    "value": "'list'",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "Mxs",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "String",
    "value": "'p1'",
    "start": 26,
    "end": 30,
    "range": [
      26,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44,
    "range": [
      35,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "Mx",
    "start": 45,
    "end": 47,
    "range": [
      45,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 58,
    "end": 60,
    "range": [
      58,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrElem",
    "start": 82,
    "end": 89,
    "range": [
      82,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "String",
    "value": "'list'",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrElem",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 125,
    "end": 129,
    "range": [
      125,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleElem",
    "start": 130,
    "end": 139,
    "range": [
      130,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "String",
    "value": "'list'",
    "start": 144,
    "end": 150,
    "range": [
      144,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleElem",
    "start": 152,
    "end": 161,
    "range": [
      152,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  }
]
```
