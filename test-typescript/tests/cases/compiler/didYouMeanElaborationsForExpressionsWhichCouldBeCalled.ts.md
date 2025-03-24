__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 356,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 65,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 54,
        "decorators": [],
        "name": "getNum",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 56,
        "end": 64,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 58,
          "end": 64
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 168,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 112,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 98,
                      "end": 101,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 101,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 103,
                  "end": 110,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 110,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 110,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 114,
          "end": 126,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 126,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 120,
              "end": 126
            }
          }
        },
        {
          "type": "Identifier",
          "start": 128,
          "end": 160,
          "decorators": [],
          "name": "items",
          "optional": true,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 167,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 212,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 199,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 199,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "CallExpression",
            "start": 203,
            "end": 211,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 203,
              "end": 209,
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 215,
        "end": 267,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 228,
                  "end": 237,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Property",
                "start": 243,
                "end": 256,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 246,
                  "end": 256,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 260,
            "end": 266,
            "decorators": [],
            "name": "getNum",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 215,
          "end": 218,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 356,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 355,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 284,
                  "end": 293,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 291,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Property",
                "start": 299,
                "end": 312,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 302,
                  "end": 312,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 310,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          {
            "type": "CallExpression",
            "start": 316,
            "end": 324,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 322,
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null
            },
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 339,
                "end": 340,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Identifier",
                "start": 346,
                "end": 352,
                "decorators": [],
                "name": "getNum",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 274,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
