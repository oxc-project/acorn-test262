__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            },
            "accessibility": null
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
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 54,
        "name": "getNum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 56,
        "end": 64,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 58,
          "end": 64
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
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
          "start": 88,
          "end": 112,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 93,
              "end": 112,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 95,
                  "end": 102,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 98,
                      "end": 101,
                      "typeName": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 101,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 103,
                  "end": 110,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 110,
                        "name": "Date",
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
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 114,
          "end": 126,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 126,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 120,
              "end": 126
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 128,
          "end": 160,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 160,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 136,
              "end": 160,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 145,
                  "end": 151
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 167,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 213,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 212,
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 174,
            "end": 201,
            "properties": [
              {
                "type": "Property",
                "start": 180,
                "end": 186,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 199,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 199,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "CallExpression",
            "start": 203,
            "end": 211,
            "callee": {
              "type": "Identifier",
              "start": 203,
              "end": 209,
              "name": "getNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 268,
      "expression": {
        "type": "CallExpression",
        "start": 215,
        "end": 267,
        "callee": {
          "type": "Identifier",
          "start": 215,
          "end": 218,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 219,
            "end": 258,
            "properties": [
              {
                "type": "Property",
                "start": 225,
                "end": 237,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 228,
                  "end": 237,
                  "callee": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 256,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 246,
                  "end": 256,
                  "callee": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 260,
            "end": 266,
            "name": "getNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 356,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 355,
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 274,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 275,
            "end": 314,
            "properties": [
              {
                "type": "Property",
                "start": 281,
                "end": 293,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 284,
                  "end": 293,
                  "callee": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 291,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 299,
                "end": 312,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 302,
                  "end": 312,
                  "callee": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 310,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "CallExpression",
            "start": 316,
            "end": 324,
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 322,
              "name": "getNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "ArrayExpression",
            "start": 326,
            "end": 354,
            "elements": [
              {
                "type": "Literal",
                "start": 332,
                "end": 333,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 339,
                "end": 340,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Identifier",
                "start": 346,
                "end": 352,
                "name": "getNum",
                "typeAnnotation": null,
                "decorators": [],
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
