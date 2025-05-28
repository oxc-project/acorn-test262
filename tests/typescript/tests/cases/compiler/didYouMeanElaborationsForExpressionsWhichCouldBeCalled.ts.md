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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 54,
        "decorators": [],
        "name": "getNum",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
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
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 199,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 199,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 228,
                  "end": 237,
                  "callee": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 256,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 246,
                  "end": 256,
                  "callee": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
        "optional": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 284,
                  "end": 293,
                  "callee": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 291,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 299,
                "end": 312,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 302,
                  "end": 312,
                  "callee": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 310,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
                "decorators": [],
                "name": "getNum",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
