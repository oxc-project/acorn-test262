__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CSSProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 38
          }
        ],
        "start": 20,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedCSSProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 65
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedSelector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 93
                },
                "typeArguments": null,
                "start": 79,
                "end": 93
              },
              "start": 77,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 93
          }
        ],
        "start": 66,
        "end": 95
      },
      "declare": false,
      "start": 41,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedSelector",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 120
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 140
                },
                "typeArguments": null,
                "start": 132,
                "end": 140
              },
              "start": 130,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 126,
            "end": 141
          }
        ],
        "start": 122,
        "end": 143
      },
      "declare": false,
      "start": 96,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stylen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedCSSProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 171
                },
                "typeArguments": null,
                "start": 157,
                "end": 171
              },
              "start": 155,
              "end": 171
            },
            "start": 149,
            "end": 171
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 192
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "colour",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 202
                            },
                            "value": {
                              "type": "Literal",
                              "value": "red",
                              "raw": "'red'",
                              "start": 204,
                              "end": 209
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 196,
                            "end": 209
                          }
                        ],
                        "start": 194,
                        "end": 211
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 188,
                      "end": 211
                    }
                  ],
                  "start": 186,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 178,
                "end": 213
              }
            ],
            "start": 174,
            "end": 215
          },
          "definite": false,
          "start": 149,
          "end": 215
        }
      ],
      "declare": false,
      "start": 145,
      "end": 215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProps",
    "start": 10,
    "end": 18,
    "range": [
      10,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 24,
    "end": 29,
    "range": [
      24,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50,
    "range": [
      41,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "NestedCSSProps",
    "start": 51,
    "end": 65,
    "range": [
      51,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "NestedSelector",
    "start": 79,
    "end": 93,
    "range": [
      79,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105,
    "range": [
      96,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "NestedSelector",
    "start": 106,
    "end": 120,
    "range": [
      106,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 126,
    "end": 130,
    "range": [
      126,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProps",
    "start": 132,
    "end": 140,
    "range": [
      132,
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
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "stylen",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "NestedCSSProps",
    "start": 157,
    "end": 171,
    "range": [
      157,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "colour",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "String",
    "value": "'red'",
    "start": 204,
    "end": 209,
    "range": [
      204,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  }
]
```
