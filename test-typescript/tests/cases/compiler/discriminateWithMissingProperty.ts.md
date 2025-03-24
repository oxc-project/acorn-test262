__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Arg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 138,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 11,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 17,
                "end": 33,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "name": "mode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 32,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 32,
                      "value": "numeric",
                      "raw": "\"numeric\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 38,
                "end": 51,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 56,
            "end": 101,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 62,
                "end": 81,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "name": "mode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 68,
                    "end": 80,
                    "literal": {
                      "type": "Literal",
                      "start": 68,
                      "end": 80,
                      "value": "alphabetic",
                      "raw": "\"alphabetic\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 86,
                "end": 99,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 104,
            "end": 138,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 110,
                "end": 136,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 135,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 116,
                    "end": 135,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 135,
                          "name": "Uint8Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 140,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 160,
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
          "start": 161,
          "end": 169,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 169,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 169,
                "name": "Arg",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 170,
        "end": 176,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 172,
          "end": 176
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 231,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 230,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 181,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 182,
            "end": 229,
            "properties": [
              {
                "type": "Property",
                "start": 184,
                "end": 199,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "name": "mode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 190,
                  "end": 199,
                  "value": "numeric",
                  "raw": "\"numeric\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 201,
                "end": 227,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 205,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 207,
                  "end": 227,
                  "callee": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 221,
                    "name": "Uint8Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "start": 222,
                      "end": 226,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 223,
                          "end": 225,
                          "value": 30,
                          "raw": "30"
                        }
                      ]
                    }
                  ],
                  "typeArguments": null
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
