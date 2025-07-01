__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "mode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "numeric",
                      "raw": "\"numeric\"",
                      "start": 23,
                      "end": 32
                    },
                    "start": 23,
                    "end": 32
                  },
                  "start": 21,
                  "end": 32
                },
                "accessibility": null,
                "static": false,
                "start": 17,
                "end": 33
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 42
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  },
                  "start": 42,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 38,
                "end": 51
              }
            ],
            "start": 11,
            "end": 53
          },
          {
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
                  "name": "mode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "alphabetic",
                      "raw": "\"alphabetic\"",
                      "start": 68,
                      "end": 80
                    },
                    "start": 68,
                    "end": 80
                  },
                  "start": 66,
                  "end": 80
                },
                "accessibility": null,
                "static": false,
                "start": 62,
                "end": 81
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 90
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  },
                  "start": 90,
                  "end": 98
                },
                "accessibility": null,
                "static": false,
                "start": 86,
                "end": 99
              }
            ],
            "start": 56,
            "end": 101
          },
          {
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Uint8Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 135
                      }
                    ],
                    "start": 116,
                    "end": 135
                  },
                  "start": 114,
                  "end": 135
                },
                "accessibility": null,
                "static": false,
                "start": 110,
                "end": 136
              }
            ],
            "start": 104,
            "end": 138
          }
        ],
        "start": 11,
        "end": 138
      },
      "declare": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 169
              },
              "typeArguments": null,
              "start": 166,
              "end": 169
            },
            "start": 164,
            "end": 169
          },
          "start": 161,
          "end": 169
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 172,
          "end": 176
        },
        "start": 170,
        "end": 176
      },
      "body": null,
      "expression": false,
      "start": 140,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 181
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
                  "name": "mode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 188
                },
                "value": {
                  "type": "Literal",
                  "value": "numeric",
                  "raw": "\"numeric\"",
                  "start": 190,
                  "end": 199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 184,
                "end": 199
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 205
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 221
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 223,
                          "end": 225
                        }
                      ],
                      "start": 222,
                      "end": 226
                    }
                  ],
                  "start": 207,
                  "end": 227
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 201,
                "end": 227
              }
            ],
            "start": 182,
            "end": 229
          }
        ],
        "optional": false,
        "start": 178,
        "end": 230
      },
      "directive": null,
      "start": 178,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
